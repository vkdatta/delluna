export const name="falling-fill";
export const id="dl_9f897f06723af6da8441";
export const url=new URL("../icons/falling-fill.svg?v=66dc25da0c9ec4be86cca021365922283e50bc92a4f166a7e1b0a30a3f3159c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
