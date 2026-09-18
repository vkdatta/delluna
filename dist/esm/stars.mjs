export const name="stars";
export const id="dl_fe1a43e830d14fb88043";
export const url=new URL("../icons/S/stars.svg?v=da47b01674a7b46ce20273f6664052cc47a6611e676a613557ff3772251589a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
