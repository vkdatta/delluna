export const name="upcoming";
export const id="dl_7ae9a76970785c427117";
export const url=new URL("../icons/upcoming.svg?v=0b7a0ae4183538f8b879ceccc334e5f4ab8e53b865dd4ad19a733719d9768dfe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
