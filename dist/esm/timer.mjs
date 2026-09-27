export const name="timer";
export const id="dl_85bf35fa22f24b30a410";
export const url=new URL("../icons/timer.svg?v=13213917f14fa141eba132e34ed22c853f191acc4415db8335efa479f4cd61d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
