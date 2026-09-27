export const name="note-blank-light";
export const id="dl_ec4f573ece3a40f7985b";
export const url=new URL("../icons/note-blank-light.svg?v=65b62587646f0065ed37aba0a73537fe1e8bb6ed0383b54ab197ab90b1c81c3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
