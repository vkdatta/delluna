export const name="gps-slash";
export const id="dl_4f253276145e4cd4b772";
export const url=new URL("../icons/gps-slash.svg?v=634d2e60fa0d9e305531444898b8c8fda78e15a27a87fc1717380a4fd5ee7e98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
