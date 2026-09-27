export const name="wave-sine-fill";
export const id="dl_5addfb3b2442a959913a";
export const url=new URL("../icons/wave-sine-fill.svg?v=b912b2644efebd74b0be31800b5a7d41a13b7138ce10ad99eb5b6e957f11d77e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
