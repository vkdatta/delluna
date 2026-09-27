export const name="house-bold";
export const id="dl_1f88a550ef424fbaa43a";
export const url=new URL("../icons/house-bold.svg?v=e8428b8dc23972fb1104ad3a4d6b6e7f91d68522779efbdd6fd581dea9638d21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
