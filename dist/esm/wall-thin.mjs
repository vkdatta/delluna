export const name="wall-thin";
export const id="dl_6e1f756c63001036a2b1";
export const url=new URL("../icons/wall-thin.svg?v=c464c020b7077e907916062a383031e07ff35a5c91f163d301a44146c46bac6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
