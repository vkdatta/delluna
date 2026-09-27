export const name="volume_mute";
export const id="dl_3f51503c7bf15cea0ffe";
export const url=new URL("../icons/volume_mute.svg?v=4edac5ed2700ead18709f19489e5f853b80a3e45e104573147859041407cfd5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
