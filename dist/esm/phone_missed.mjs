export const name="phone_missed";
export const id="dl_06ea6f0829244301b7e7";
export const url=new URL("../icons/P/phone_missed.svg?v=fcee9b8319130705bb2652186f1971f6ed554ef65d19c0fc35bb70d0613904f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
