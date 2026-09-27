export const name="numpad";
export const id="dl_ce36f3b2b1d343e69052";
export const url=new URL("../icons/numpad.svg?v=7aacff382c87dc04fa58412efffc85322d4b0e56bd295f86f72e5cc9bc2041d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
