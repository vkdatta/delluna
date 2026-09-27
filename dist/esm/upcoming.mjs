export const name="upcoming";
export const id="dl_2548259cc65cd0c903cf";
export const url=new URL("../icons/upcoming.svg?v=c8bd58675f698a66b38d045af53316350e91908d6badbe9f7c9592ff2eaffc8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
