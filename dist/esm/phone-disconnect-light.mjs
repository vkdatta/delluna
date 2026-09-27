export const name="phone-disconnect-light";
export const id="dl_3bdf602e165a4178a43a";
export const url=new URL("../icons/phone-disconnect-light.svg?v=138cd64c569921c626c5fbc43432645f13290d3d85b05e30c581ed981d3112f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
