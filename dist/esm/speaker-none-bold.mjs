export const name="speaker-none-bold";
export const id="dl_b33cd4ce98c2d566ba25";
export const url=new URL("../icons/speaker-none-bold.svg?v=a933caa63a81f1a5d5bcd6b9234cb1dc96053ccbfbf7470d8f39f9a00745569d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
