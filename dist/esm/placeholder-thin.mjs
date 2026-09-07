export const name="placeholder-thin";
export const id="dl_68cfa4216a454f67bf90";
export const url=new URL("../icons/placeholder-thin.svg?v=2cbeab7a4b85ed27ad9d56dea179c6d48f64d798443b84fd58cb54de96160c3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
