export const name="stacked_inbox";
export const id="dl_bcfb110d462053e32fd3";
export const url=new URL("../icons/stacked_inbox.svg?v=bb894cc70e8fcf62830a482dbc8703834ee122209411bb7d0b1d43160307a292",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
