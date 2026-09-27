export const name="arrow-elbow-left-down-fill";
export const id="dl_cfd7bf2ec83a420ea58e";
export const url=new URL("../icons/arrow-elbow-left-down-fill.svg?v=dfb27b4f05416bb8e551abd0fd25cecd0400e7465fd3f28d6a6742bf2fc97fa7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
