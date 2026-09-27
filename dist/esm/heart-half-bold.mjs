export const name="heart-half-bold";
export const id="dl_af84151d31c14ced8765";
export const url=new URL("../icons/heart-half-bold.svg?v=10b503f0aaa65910542d524f15dcc73e9f7e14ec1c05166a2f6087b85495aa70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
