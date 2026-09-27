export const name="power-bold";
export const id="dl_0c6838c7db9f4581b077";
export const url=new URL("../icons/power-bold.svg?v=9bc6b49b7d4424cd9a5f1917f7965102ca9fe8365054cb731bd9851050d8afb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
