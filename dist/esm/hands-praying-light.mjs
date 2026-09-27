export const name="hands-praying-light";
export const id="dl_c921d04478d146f88f07";
export const url=new URL("../icons/hands-praying-light.svg?v=31fe949f1760fa33129b139af414b5c10b43c680a0c8de9a52d30da4e3cd4a77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
