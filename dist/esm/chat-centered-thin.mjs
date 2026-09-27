export const name="chat-centered-thin";
export const id="dl_0fb55f86b8dd482e868d";
export const url=new URL("../icons/chat-centered-thin.svg?v=6e7be07ae1b2f063f053bb77bc17256bcf053107861b9e10cc1d4e35e07b125f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
