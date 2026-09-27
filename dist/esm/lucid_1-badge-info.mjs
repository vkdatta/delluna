export const name="lucid_1-badge-info";
export const id="dl_2d07ed5662b84c0fbb41";
export const url=new URL("../icons/lucid_1-badge-info.svg?v=7b488fb61b73ce156b7489080310babced3e83a1c18184715cf41c7afae4f387",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
