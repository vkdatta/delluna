export const name="lucid_3-pilcrow";
export const id="dl_0029b7486d3f4988b3cd";
export const url=new URL("../icons/lucid_3-pilcrow.svg?v=7995632a65402ed00dde56afb1630dbd21140f3f5510e461b12157b0f1ab11b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
