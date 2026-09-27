export const name="mic_external_on";
export const id="dl_148ceb71e050ce069fed";
export const url=new URL("../icons/mic_external_on.svg?v=23736eab63ec594bef78753aea82f8a8df035ffc80d06e656f133038e463b129",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
