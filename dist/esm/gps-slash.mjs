export const name="gps-slash";
export const id="dl_4f253276145e4cd4b772";
export const url=new URL("../icons/gps-slash.svg?v=474efdb8607f0ba7724eedf1c7b50c1f7590c62a872b0c6d19f871ca60cf5080",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
