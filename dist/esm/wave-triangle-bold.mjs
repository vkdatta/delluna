export const name="wave-triangle-bold";
export const id="dl_01649e8d843d4ccca865";
export const url=new URL("../icons/W/wave-triangle-bold.svg?v=d74d1af8867361ec31ba36119e8255cf36e5dd94a736b1264fb3c3e8a0b4cc33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
