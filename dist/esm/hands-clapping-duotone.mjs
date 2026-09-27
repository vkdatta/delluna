export const name="hands-clapping-duotone";
export const id="dl_3c6c2b3f78c7424e8540";
export const url=new URL("../icons/hands-clapping-duotone.svg?v=b9344e7e3be71c42d420a45e07494a2b354b2c27fd9a76296ab8eeaf4e40c470",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
