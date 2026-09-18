export const name="no_photography";
export const id="dl_5732975e96f541d08601";
export const url=new URL("../icons/N/no_photography.svg?v=2d068f8d5ebe6e669d54546d57cb0f104b804ff0d6735ca2009fda8e03222c8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
