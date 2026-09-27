export const name="smiley-melting-fill";
export const id="dl_d0d2c52a1e275f90e39b";
export const url=new URL("../icons/smiley-melting-fill.svg?v=bb0acbe528151e7a028dc0133c74dbbbb7231e258b1e923f057808c1abeb5d32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
