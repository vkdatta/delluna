export const name="angle-light";
export const id="dl_e0c58ee97ed44929a0fb";
export const url=new URL("../icons/angle-light.svg?v=2deca51a89c360de19e2fb9a23a462f1aa1d0b89c1fd0c8064001efa003b4b40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
