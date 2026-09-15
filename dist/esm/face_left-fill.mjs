export const name="face_left-fill";
export const id="dl_bd97e79f841445a99488";
export const url=new URL("../icons/F/face_left-fill.svg?v=2d57e2ba75c39b3168474c5a5380fe9923329cd738ad947a1a6bd44d67468179",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
