export const name="lucid_1-arrow-left-to-line";
export const id="dl_bd3995c1cefc4046a7de";
export const url=new URL("../icons/lucid_1-arrow-left-to-line.svg?v=c22450edaefb4557b407b011865e52514ff0abd6da2992416e27c2d7cedc2bb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
