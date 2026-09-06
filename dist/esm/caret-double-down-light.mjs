export const name="caret-double-down-light";
export const id="dl_761ec8bd66d645a485cb";
export const url=new URL("../icons/caret-double-down-light.svg?v=21768635cbc541a37d73fcde1f0722af16f3ba2fa35e354565fc9a195c311bf7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
