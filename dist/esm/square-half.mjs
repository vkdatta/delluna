export const name="square-half";
export const id="dl_d03bef9a70fc46bdb318";
export const url=new URL("../icons/S/square-half.svg?v=09f561de8c5e6ed831723a1bc8f6f987fb453928a0028a3f95a0366bae055768",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
