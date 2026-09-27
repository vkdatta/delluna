export const name="clean_hands";
export const id="dl_3cb538c2ed8dea921749";
export const url=new URL("../icons/clean_hands.svg?v=12e7d2017e12890125940a861f61f22f9dc2963c510e92290433efc5ff31d417",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
