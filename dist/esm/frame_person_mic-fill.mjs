export const name="frame_person_mic-fill";
export const id="dl_d6f0062f1137fe6118b0";
export const url=new URL("../icons/frame_person_mic-fill.svg?v=2d627765c3aa078fc2249da081e5b4374aa5ae94021b0839ed272d151885bee3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
