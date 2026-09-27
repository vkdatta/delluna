export const name="cognition_2";
export const id="dl_da79a169b6fbf3eeba13";
export const url=new URL("../icons/cognition_2.svg?v=dd9283daf52b5b7b10678d41d84080e498c7ace2a7831639cb3fdae523ef7b49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
