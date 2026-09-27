export const name="door-open-light";
export const id="dl_a879be9c01744b99b34b";
export const url=new URL("../icons/door-open-light.svg?v=66138e839f51bbb8bf56ec7f53e86bca54e9519bdf32ede43e05367d22308042",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
