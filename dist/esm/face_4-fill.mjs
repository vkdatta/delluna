export const name="face_4-fill";
export const id="dl_4c0e5a47abff4ffa8f03";
export const url=new URL("../icons/face_4-fill.svg?v=0781fbde02771910ce461c75f3f51aee933813a18833c6a08804400056c524b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
