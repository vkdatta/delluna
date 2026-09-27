export const name="phone-disconnect-thin";
export const id="dl_1f59349cf9f5402480a5";
export const url=new URL("../icons/phone-disconnect-thin.svg?v=43b1b7ba4e5a9193f9fb32f6652ee411060b7ffdad2709ba9690aa0cebb7d47a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
