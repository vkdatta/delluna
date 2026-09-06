export const name="disc-light";
export const id="dl_e5c5a8593b564eae9f31";
export const url=new URL("../icons/disc-light.svg?v=61f04556fe323cefd62d694db115d4744353a270f867c511cdd05e7e72673116",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
