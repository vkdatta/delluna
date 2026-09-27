export const name="user-rectangle-thin";
export const id="dl_1136c215b2b8149512ea";
export const url=new URL("../icons/user-rectangle-thin.svg?v=a1b15507d04139675a24ddf1eb5aae88dfcc82be715633d07937dcf9dcf40f69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
