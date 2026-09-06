export const name="camera-slash-thin";
export const id="dl_46c415d5470b4d0993c2";
export const url=new URL("../icons/camera-slash-thin.svg?v=5103e621e24c7f8ddc9551155add81b94e79a35f4ece277e891facc4dac6ceec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
