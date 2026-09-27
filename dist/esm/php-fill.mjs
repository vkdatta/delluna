export const name="php-fill";
export const id="dl_5c8b958eeae68ebd0d14";
export const url=new URL("../icons/php-fill.svg?v=968860f2071275fe74ea02eb4f9c38f426ec7c3d2951348e477cca0031754c14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
