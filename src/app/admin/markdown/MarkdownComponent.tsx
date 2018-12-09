import * as React from 'react';
import classNames from 'classnames';
import * as ReactMarkdown from 'react-markdown';
import { Grid, Theme, createStyles, withStyles, TextField } from '@material-ui/core';

import ContentHeader from '../../common/ContentHeader';

const styles = (theme: Theme) =>
    createStyles({
        textarea: {
            width: '100%',
            marginRight: theme.spacing.unit,
            '& div': {
                height: 'calc(100vh - 150px)',
                paddingTop: theme.spacing.unit * 2,
                paddingBottom: theme.spacing.unit,
            }
        },
        textareaRoot: {
        },
        preview: {
            width: '100%',
            height: 'calc(100vh - 150px)',
            border: `1px solid ${theme.palette.divider}`,
            marginLeft: theme.spacing.unit,
            padding: theme.spacing.unit * 3,
            borderRadius: 4,
        }
    });

class MarkdownComponent extends React.Component<{
    classes: any,
}, { input: string }> {

    constructor(props) {
        super(props);
        this.state = {
            input: `# Hi, I am Markdown.
- one
- two
- ...

\`\`\`
Code block
\`\`\`
`
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        this.setState({ input: e.target.value })
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <ContentHeader title='Markdown Editor' />
                <Grid container>
                    <Grid item xs={6}>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Markdown Content"
                            multiline
                            value={this.state.input}
                            onChange={this.handleInputChange}
                            className={classes.textarea}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <ReactMarkdown className={classNames('markdown-body', classes.preview)} source={this.state.input} />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(MarkdownComponent);