export const name="face_nod-fill";
export const id="dl_7d60a1e25b9bece601ee";
export const url=new URL("../icons/face_nod-fill.svg?v=da0181b6aed7fe84d20d67986cb81aae6dc90c891a945c29754494f43d634245",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
