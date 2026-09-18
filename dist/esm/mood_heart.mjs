export const name="mood_heart";
export const id="dl_8c5de5f143d84da6b72f";
export const url=new URL("../icons/mood_heart.svg?v=df535a9a30df56c6ea58afe8edd6165aa33bf448ee676ddf199927d0fa8e7848",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
