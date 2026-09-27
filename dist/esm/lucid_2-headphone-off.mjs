export const name="lucid_2-headphone-off";
export const id="dl_ceca4958b4924175bde7";
export const url=new URL("../icons/lucid_2-headphone-off.svg?v=97ab4bc0ef9abb6a449f7bcfe1e35f33373c40fa638f72726a14f1a26e046c4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
