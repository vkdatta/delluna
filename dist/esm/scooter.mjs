export const name="scooter";
export const id="dl_26eac4738a2d47ee838d";
export const url=new URL("../icons/S/scooter.svg?v=c3f190b8a1c7a4e67772a1e189b8ac54c1da677f72e4c731f51047afa407787b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
