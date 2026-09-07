export const name="warning-octagon-thin";
export const id="dl_7617012014204d2691ec";
export const url=new URL("../icons/W/warning-octagon-thin.svg?v=9e8832a5f316be092960ad46cf5335c7fb7d8c212db6359e4fa9fbdb5101c1bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
