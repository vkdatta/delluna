export const name="screen_record-fill";
export const id="dl_ca9af22ff2c6b7c6d303";
export const url=new URL("../icons/screen_record-fill.svg?v=8ea1491fc18b128cad7914cfba5ed1eeceead3e8d11262cf25956d467d389cb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
