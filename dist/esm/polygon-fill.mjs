export const name="polygon-fill";
export const id="dl_db88e50b0b2641478945";
export const url=new URL("../icons/polygon-fill.svg?v=0cb40b1376f797f6da54a9f9409017358fdfd80930b6c4c169ad79f7c071dd80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
