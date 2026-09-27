export const name="layout-bold";
export const id="dl_dfa22b1e3d284cb8a174";
export const url=new URL("../icons/layout-bold.svg?v=8b4c38033edd398d11a5eedc7e47ff73c08a1dd5b310cee85af8ff204b937be3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
