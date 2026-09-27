export const name="lucid_1-circle-small";
export const id="dl_8f7b0e1dd3784e47bbf1";
export const url=new URL("../icons/lucid_1-circle-small.svg?v=68efbd5e0c88a133765c5ebf435d600f0588022d0362e434d988a6350520b6c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
