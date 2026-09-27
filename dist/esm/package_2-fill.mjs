export const name="package_2-fill";
export const id="dl_3fe6a094cc56509844ca";
export const url=new URL("../icons/package_2-fill.svg?v=3abab0a7e343cc6246f6afa52fc4499f0eb54f52e3df0391b93e0c9d62b10c29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
