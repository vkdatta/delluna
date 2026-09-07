export const name="shield-slash-bold";
export const id="dl_2ea4d74c68094bb8b4c3";
export const url=new URL("../icons/S/shield-slash-bold.svg?v=232d8ce7408b86a22077fc1cdec4dfd068c0469dc393a7038ffaa0bcf312441d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
