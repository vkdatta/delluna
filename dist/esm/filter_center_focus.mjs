export const name="filter_center_focus";
export const id="dl_6b67fa1321bb19ffe1d4";
export const url=new URL("../icons/filter_center_focus.svg?v=7773aa0a2fc01e0e4cf807b283a69de6d060f7adf0fade4ff4f6bf19d0e16bf0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
