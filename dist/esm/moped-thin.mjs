export const name="moped-thin";
export const id="dl_964bfc3e304944719f77";
export const url=new URL("../icons/moped-thin.svg?v=adb9ba7b8c0f7b01cd4a3d12df8a184222e2f43b587783f158ad8996c6ca7462",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
