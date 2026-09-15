export const name="box-fill";
export const id="dl_72342e38167940fc8444";
export const url=new URL("../icons/B/box-fill.svg?v=cc19fcc3659cfd2ff2b7c0dfa69d00d0b4960cd0c750751831780ba04f03c5ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
