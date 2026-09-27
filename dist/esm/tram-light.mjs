export const name="tram-light";
export const id="dl_021217cdeeea13a9b1da";
export const url=new URL("../icons/tram-light.svg?v=130b4e2481e45fd454439d9dd9d488da347addbf2f02ad41dfa0534cade5734b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
