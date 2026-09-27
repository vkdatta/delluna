export const name="caret-circle-double-up-thin";
export const id="dl_e46749c7aaf0477c866f";
export const url=new URL("../icons/caret-circle-double-up-thin.svg?v=9f471fbeb5c1450d85654e7b821c1c9f0bc3275fd7affb480d94f5532315cd76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
