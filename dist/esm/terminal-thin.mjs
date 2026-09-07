export const name="terminal-thin";
export const id="dl_87cd5c9db5154740a35d";
export const url=new URL("../icons/T/terminal-thin.svg?v=2129fc7373f027b34d09179e17381b5d391ae14bc6d99db80344e55248a21595",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
