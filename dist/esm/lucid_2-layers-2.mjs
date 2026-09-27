export const name="lucid_2-layers-2";
export const id="dl_9c04083a21c1498eac1d";
export const url=new URL("../icons/lucid_2-layers-2.svg?v=7e7b1bc50a956d10e6b3a9f60a2221ef9c67dc3f0d87e75684a2cf720a9437e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
