export const name="windmill";
export const id="dl_9df4d09f9faf08b310f0";
export const url=new URL("../icons/windmill.svg?v=47f8fee15b58354b340a5751e0c5585c6ace311de4bbdebecff4132cca870e75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
