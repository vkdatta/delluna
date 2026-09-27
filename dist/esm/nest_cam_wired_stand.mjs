export const name="nest_cam_wired_stand";
export const id="dl_bee081708942e93f9e5b";
export const url=new URL("../icons/nest_cam_wired_stand.svg?v=8a709d6a2799f342d47f44f1b1d27702c5796bfe38bcf4a8ef2364f18a25c99d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
