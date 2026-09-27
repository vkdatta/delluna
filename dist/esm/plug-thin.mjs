export const name="plug-thin";
export const id="dl_af88995218184b6cacca";
export const url=new URL("../icons/plug-thin.svg?v=5721685574a6b4aeeb45c6923b300e3f9183657d9c2bd45a6d9cfe645b3759a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
