export const name="hourglass-simple";
export const id="dl_310e1f673af14260be87";
export const url=new URL("../icons/hourglass-simple.svg?v=7298870e6ac5e2485e12617a8af52a10bcf8e59a6accf787d9da43b0487e49fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
