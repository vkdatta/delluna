export const name="arrow-u-down-right-duotone";
export const id="dl_728f9c8b23aa4710a0dd";
export const url=new URL("../icons/arrow-u-down-right-duotone.svg?v=876eb3863c17eb988d029d11641060f11353ec02e67c38295fa8eeebc4a5e672",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
