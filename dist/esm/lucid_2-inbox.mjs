export const name="lucid_2-inbox";
export const id="dl_8a60cd881e9b47b9a342";
export const url=new URL("../icons/lucid_2-inbox.svg?v=996c3bc7e4723be7330956019221bed8ec9f83887f5b51e35f5b0754e7dc8973",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
