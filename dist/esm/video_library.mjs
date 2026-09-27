export const name="video_library";
export const id="dl_01806721da63b130009c";
export const url=new URL("../icons/video_library.svg?v=ad8c54a4dd3717405a49f142b69d18c72d0b426b682e426206dedb9f03a6210d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
