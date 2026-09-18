export const name="wrong_location-fill";
export const id="dl_a62830924d314ddd949e";
export const url=new URL("../icons/wrong_location-fill.svg?v=c0b07b72c8ad4beeddfa77eb4cb3a78d56f89a79cf413d2f9c25e1bb7d440123",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
