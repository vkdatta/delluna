export const name="treasure-chest-light";
export const id="dl_e3539d45383ddba53d52";
export const url=new URL("../icons/treasure-chest-light.svg?v=e4fc4a0a4171a59a3a73807debd05c8ee6b546a60d1f0d2d44b13b837143110f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
