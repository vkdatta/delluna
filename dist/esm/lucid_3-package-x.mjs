export const name="lucid_3-package-x";
export const id="dl_92582cd8d718479c98bb";
export const url=new URL("../icons/lucid_3-package-x.svg?v=696c91acf7b9449e8bb8c2f23460a694f79cf945441761bd969975c5edbe7fe1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
