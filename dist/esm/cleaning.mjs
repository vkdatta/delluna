export const name="cleaning";
export const id="dl_c12ef6b2d9f82519fb2d";
export const url=new URL("../icons/cleaning.svg?v=e278088fbc9b7aff9615a4f078221ea500d444b7c06e930cca26b0e628158345",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
