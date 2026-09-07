export const name="shield-check-thin";
export const id="dl_65ec418a002e4b0cb5ab";
export const url=new URL("../icons/S/shield-check-thin.svg?v=72fbd2bb25cbf0efb3112a59bfe9b9be6960f4d460d0176c7ccbd8a18dda4db5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
