export const name="wave-sine-bold";
export const id="dl_211e115da126e966213a";
export const url=new URL("../icons/wave-sine-bold.svg?v=c4833137070af5237fcf9fac00f894c59b99e3028a1cc7923a5f5538b5b72498",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
