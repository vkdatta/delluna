export const name="terminal-window";
export const id="dl_ccf19e88dba725cd9755";
export const url=new URL("../icons/terminal-window.svg?v=5043ee638fa2ac1bcc25adcaa7cf3940feec8045dc7b1bba731e31297c1166df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
