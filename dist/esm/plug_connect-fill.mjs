export const name="plug_connect-fill";
export const id="dl_63467183883d91576086";
export const url=new URL("../icons/plug_connect-fill.svg?v=2092b630241f7c25c49423bb9c12e38dcf7c297f80ca3943394033dfb6c19686",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
