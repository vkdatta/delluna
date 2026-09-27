export const name="subwoofer";
export const id="dl_f08af87d332d50db4777";
export const url=new URL("../icons/subwoofer.svg?v=0f968bf027d9e0436fa30905f1e28d0a412224727b0311d2ede83ffcc81bae0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
