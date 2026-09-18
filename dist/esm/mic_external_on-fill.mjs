export const name="mic_external_on-fill";
export const id="dl_75a363d2cc364bc79de0";
export const url=new URL("../icons/mic_external_on-fill.svg?v=560d6a9bcb63822efb71b46fdcd17cee66a6d7f9afac071d80f78587a5ba4fbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
