export const name="sports_golf";
export const id="dl_8317beefe1a1bb28d660";
export const url=new URL("../icons/sports_golf.svg?v=e804cf72a97b8deb525094ddec7e66ce0b7e639df46346b9d43ed06fa9cfe7c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
