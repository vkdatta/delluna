export const name="lucid_3-skull";
export const id="dl_c7618281f61546298043";
export const url=new URL("../icons/lucid_3-skull.svg?v=92342e1fd904e25709d6f220452753c22dd404adb3af42271db85033430d3cd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
