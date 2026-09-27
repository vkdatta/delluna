export const name="schema";
export const id="dl_b82de816cada3217d0e8";
export const url=new URL("../icons/schema.svg?v=3cdcdd4a8bb34ce1c4a8f9a96872ac61e946aad6f86e13f727ea33285f0cf38b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
