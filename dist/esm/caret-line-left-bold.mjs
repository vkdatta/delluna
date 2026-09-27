export const name="caret-line-left-bold";
export const id="dl_712fc590aaba4cd3a922";
export const url=new URL("../icons/caret-line-left-bold.svg?v=46dbd05af5ea670364b560138f59f60593098514c30fab2e74680a1162946754",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
