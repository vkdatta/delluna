export const name="shield-slash-bold";
export const id="dl_4c3ad3dc43705b0b3fe1";
export const url=new URL("../icons/shield-slash-bold.svg?v=232d8ce7408b86a22077fc1cdec4dfd068c0469dc393a7038ffaa0bcf312441d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
