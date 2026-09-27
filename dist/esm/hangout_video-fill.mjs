export const name="hangout_video-fill";
export const id="dl_6c44d3fcdc4526c1a24a";
export const url=new URL("../icons/hangout_video-fill.svg?v=4950d83d3f8b51d33d438d2e18ab68e691c7ebed300c46f77de89725009bbac7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
