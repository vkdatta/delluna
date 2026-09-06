export const name="command-fill";
export const id="dl_16f8ed07445f4401b247";
export const url=new URL("../icons/command-fill.svg?v=79330589f8a666ae65f0faa9293c94695c15bf5658231ab4d8bb3f954ac3b49d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
