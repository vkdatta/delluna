export const name="puzzle";
export const id="dl_6f5ce3a719f74ebb83e5";
export const url=new URL("../icons/puzzle.svg?v=c50fe33eb3f3aa9fb1baf92801a7ce3b60423798324c9f49651409ce91f557f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
