export const name="user-circle-check-duotone";
export const id="dl_f4660ff9bdb191d2bb4e";
export const url=new URL("../icons/user-circle-check-duotone.svg?v=092c1dff782baf6f0c9d579258a9ee8845316689bf38e025c0b28ad4a75bfaf7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
