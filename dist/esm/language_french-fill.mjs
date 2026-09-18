export const name="language_french-fill";
export const id="dl_e221aece56964af883b4";
export const url=new URL("../icons/L/language_french-fill.svg?v=6b8c1e9f0ef0bb4df0b0d9ad99ddb594c8ea38e48c452244af6b76b03de53931",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
