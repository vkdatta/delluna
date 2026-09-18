export const name="looks_one";
export const id="dl_6235ca554f5c4ba09e7e";
export const url=new URL("../icons/looks_one.svg?v=cfcb2ded73743bea1283e7a3b68f10b62095a82b9f067063285f5a5f8572710b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
