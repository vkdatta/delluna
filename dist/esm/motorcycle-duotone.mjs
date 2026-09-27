export const name="motorcycle-duotone";
export const id="dl_5ab73216ee22471dba5b";
export const url=new URL("../icons/motorcycle-duotone.svg?v=16f3d8dca3a1d60c95bd751dc8180f4722b21f074edf6d7f9047e1e509478e20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
