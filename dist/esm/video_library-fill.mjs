export const name="video_library-fill";
export const id="dl_68de6e34edce44b4946f";
export const url=new URL("../icons/video_library-fill.svg?v=e248d89e5bf73ddbdfd57aa6639ffe72f3e2f7f32e4f2272c519bdf5f514e1ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
