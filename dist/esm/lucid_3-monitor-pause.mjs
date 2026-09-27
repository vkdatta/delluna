export const name="lucid_3-monitor-pause";
export const id="dl_5bf65c55f50445b5adbd";
export const url=new URL("../icons/lucid_3-monitor-pause.svg?v=277cab785a6c9676e9ab3d96b558f4a02bb8e7947fb8284c063b9a507ca2d177",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
