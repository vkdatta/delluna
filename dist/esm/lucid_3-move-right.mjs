export const name="lucid_3-move-right";
export const id="dl_7ef437b3ae824d16886e";
export const url=new URL("../icons/lucid_3-move-right.svg?v=ce4bc912181246e4e965d15306dc78457bba71a44391bbdc877ee0b8d52c4979",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
