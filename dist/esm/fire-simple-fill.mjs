export const name="fire-simple-fill";
export const id="dl_3bf444577b0e46049ddb";
export const url=new URL("../icons/fire-simple-fill.svg?v=300f9741534230a7d1c24e964bfa1e405bb1f29137c01a0becbfe8352648e92b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
