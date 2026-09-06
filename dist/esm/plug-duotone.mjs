export const name="plug-duotone";
export const id="dl_3837523e2967470e80f7";
export const url=new URL("../icons/plug-duotone.svg?v=168d5edc8dd260de0a08d32aa4fe6f9231d746e3ebe968357f6e2ee1e86dbba6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
