export const name="topic-fill";
export const id="dl_e978209c164fc4f2031d";
export const url=new URL("../icons/topic-fill.svg?v=a1bcf131fe15c9b8f9d48de2edd14d6b85d208d7b6a07258eb7a7c008451a5fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
