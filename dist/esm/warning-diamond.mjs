export const name="warning-diamond";
export const id="dl_6138f4a72a68753031db";
export const url=new URL("../icons/warning-diamond.svg?v=048da91a3a976752e4622d7c88f0ca9c9bb945eaeb11cb963b3978586714c004",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
