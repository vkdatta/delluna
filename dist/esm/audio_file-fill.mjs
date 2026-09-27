export const name="audio_file-fill";
export const id="dl_9e3c4ffdec5fa3d17777";
export const url=new URL("../icons/audio_file-fill.svg?v=4cb904761a3c188a694d9a9b909e6ad9955ad096e4588ccac4518984fee7a357",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
