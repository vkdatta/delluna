export const name="folder-simple-minus";
export const id="dl_cea81c08e3a948289a0f";
export const url=new URL("../icons/folder-simple-minus.svg?v=0894c25bfbea64a48a6619888c957d1314e6a73e7a2e1cfe5cc608872a73f684",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
