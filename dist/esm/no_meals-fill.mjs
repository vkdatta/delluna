export const name="no_meals-fill";
export const id="dl_3d44d8d9ae995bb65f81";
export const url=new URL("../icons/no_meals-fill.svg?v=5c1883e89fd413682804c33e67a7019d0c67f1fccea97a6211520349017ccd36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
