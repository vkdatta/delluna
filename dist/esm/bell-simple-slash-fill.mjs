export const name="bell-simple-slash-fill";
export const id="dl_8f8f7d2e8a55483186c2";
export const url=new URL("../icons/bell-simple-slash-fill.svg?v=e63511219042c5539c80f250a4f37449d80dc142ad188daa3c384ac07a1bb01b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
