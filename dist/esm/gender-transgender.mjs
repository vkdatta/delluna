export const name="gender-transgender";
export const id="dl_8359adadb3554bdab567";
export const url=new URL("../icons/gender-transgender.svg?v=8d7c281757222a12e03bd3ada095c4d201f3da79ecef39fd7c1559df68530926",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
