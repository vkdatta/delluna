export const name="volunteer_activism";
export const id="dl_f174f3ef6a2f4cb59ce1";
export const url=new URL("../icons/V/volunteer_activism.svg?v=11f8cb27acc86bc5c4b13c499083dab269051b2cb80124d5cedb4814444dcd0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
