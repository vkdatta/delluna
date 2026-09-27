export const name="verified-fill";
export const id="dl_cbb779a9a264d47c1f09";
export const url=new URL("../icons/verified-fill.svg?v=6c16609b695a146da230cc87f08c5009d82658b04b2e4517e93e18bf5969bcd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
