export const name="call_missed-fill";
export const id="dl_5b18abbd5f37ad37ed18";
export const url=new URL("../icons/call_missed-fill.svg?v=a45347b5b2dfa74c1562fb6f7a1959ad8c76d81a374a4d5cacfc35c541a71059",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
