export const name="settings_screen";
export const id="dl_71702b71b6c5513bd248";
export const url=new URL("../icons/settings_screen.svg?v=b1e88e9b7db6a9b06d69306a3ed59272c9eca6728816890bde99760fada30f49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
