export const name="letter-circle-p-fill";
export const id="dl_3383fba88e2c4b98bf5a";
export const url=new URL("../icons/letter-circle-p-fill.svg?v=f5b9214a8f324813d6b87c1ad373eea2f80bf0c1952184a43dde599224df34be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
