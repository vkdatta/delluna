export const name="folder_eye";
export const id="dl_107557392cbedb0b7312";
export const url=new URL("../icons/folder_eye.svg?v=9eb01680eff191fc8407df3312feaa3932230a5c836d88bd259b622f28b7316a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
