export const name="attach_money";
export const id="dl_8bcedf6dcd3440f1a3a1";
export const url=new URL("../icons/attach_money.svg?v=1969b20347d88883de1706edf08dee3747adebf587e0f64e07e1d9d7fd731649",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
