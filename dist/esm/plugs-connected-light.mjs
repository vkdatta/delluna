export const name="plugs-connected-light";
export const id="dl_fa25891cbdf54956bef4";
export const url=new URL("../icons/plugs-connected-light.svg?v=213aab30713660bf2504530d964e3100906b1be823bb65ff8d48784e28250b4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
