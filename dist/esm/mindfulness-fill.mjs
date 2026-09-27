export const name="mindfulness-fill";
export const id="dl_21436a1b6e3eb3eb49aa";
export const url=new URL("../icons/mindfulness-fill.svg?v=083c9195f58e42fd120265146553715c682ee90a40c038ad62dcce98d9273789",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
