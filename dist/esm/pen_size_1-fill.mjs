export const name="pen_size_1-fill";
export const id="dl_d2cddf73c33e46cc927a";
export const url=new URL("../icons/pen_size_1-fill.svg?v=13c90b2ada7306250e645c01ba6a6c42548956dae121e30a53dcd1277655d097",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
