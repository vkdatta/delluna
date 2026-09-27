export const name="auto_read_pause";
export const id="dl_8caad16b68fbf0ccb84a";
export const url=new URL("../icons/auto_read_pause.svg?v=3a0550744f09780676f995e17bcdd40d765eab066f226009e9e9ef551a7a8c05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
