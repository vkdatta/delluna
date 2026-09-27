export const name="lucid_3-shrub";
export const id="dl_f40a234a1ab74e459391";
export const url=new URL("../icons/lucid_3-shrub.svg?v=e12b38f23306319c856a7b7f82ed91b8c4901d06a761f010e269c1cf2027e663",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
