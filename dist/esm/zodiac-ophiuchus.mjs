export const name="zodiac-ophiuchus";
export const id="dl_d77513d028d24757bafa";
export const url=new URL("../icons/zodiac-ophiuchus.svg?v=04499406c3d00d8a3230e8e90eeb1b161f15f017fd102efd768d46567efe2e8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
