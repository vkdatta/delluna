export const name="stacked_inbox";
export const id="dl_5582d6475f5e48f3bc7d";
export const url=new URL("../icons/stacked_inbox.svg?v=80d31240e2c0c3590508bb90b7e43970ccd8780812eeaf14f72afb7132e9c442",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
