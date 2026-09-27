export const name="app-store-logo-fill";
export const id="dl_1e51cfbee75a4683b52c";
export const url=new URL("../icons/app-store-logo-fill.svg?v=2ed3c09ecba03ab55d0687bde8eedcba84275a192c5cf0f0f0782fe58ff647f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
