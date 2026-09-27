export const name="splitscreen_portrait";
export const id="dl_0b37cc9f793710a16fe6";
export const url=new URL("../icons/splitscreen_portrait.svg?v=370804cbbe96174746ad3058bf7e98fc2a9937b233b7164291dcf33d47facccc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
