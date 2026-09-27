export const name="list-star-fill";
export const id="dl_bff78b2ecf1c4545a6cd";
export const url=new URL("../icons/list-star-fill.svg?v=60bd2896bf8f10883cb6d7d169900ef7b864e5a9383ceae3af58f609795699c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
