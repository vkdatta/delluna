export const name="check_indeterminate_small-fill";
export const id="dl_ca2cba820e014ffc245b";
export const url=new URL("../icons/check_indeterminate_small-fill.svg?v=13d85ec330c7c11fa7b06e421c04809d5d1d2b5c0662b3a52c4ef3388df58599",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
