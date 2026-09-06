export const name="number-circle-two";
export const id="dl_2c6c6fcdb1bd4bc7b0c3";
export const url=new URL("../icons/number-circle-two.svg?v=4f6f71e4d4338fa2d3079001a110cb4743e382acfe2bc48880bf7fe57e35e471",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
