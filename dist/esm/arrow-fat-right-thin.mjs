export const name="arrow-fat-right-thin";
export const id="dl_b019fef98d674c0eab2d";
export const url=new URL("../icons/arrow-fat-right-thin.svg?v=0f2079e20996483d2f0917e696a32593fdb2fc4368fa5869b92829ecd21fac4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
