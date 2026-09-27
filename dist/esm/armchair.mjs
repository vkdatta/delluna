export const name="armchair";
export const id="dl_6f8722d5620a4af1b1b0";
export const url=new URL("../icons/armchair.svg?v=bf27af0b1c712e39a27edad12a8aca5e390b7ad9f22f43e61d368dc4896b467c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
