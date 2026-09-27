export const name="lucid_1-castle";
export const id="dl_51a05cc74cd849f3ae04";
export const url=new URL("../icons/lucid_1-castle.svg?v=a9f6509df27aa69a3fc8c482ab2df7d0b42e838b1e7753d9f4cbd21070b15936",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
