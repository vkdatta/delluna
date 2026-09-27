export const name="arrows-out-cardinal-bold";
export const id="dl_032455ccf3034b42978d";
export const url=new URL("../icons/arrows-out-cardinal-bold.svg?v=85911697abc1a36bdb832b76f88b02a55749b15f4022fa2b665161e4f161bc5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
