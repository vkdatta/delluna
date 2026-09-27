export const name="number-circle-four-duotone";
export const id="dl_127a4c37deb64f40ad75";
export const url=new URL("../icons/number-circle-four-duotone.svg?v=f64158a890b95d518ab65716aa8371fbaa9dcded07ea1f627bf5f2b0265c78ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
