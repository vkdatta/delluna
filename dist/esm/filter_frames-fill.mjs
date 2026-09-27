export const name="filter_frames-fill";
export const id="dl_8ecf8cecedb261316f04";
export const url=new URL("../icons/filter_frames-fill.svg?v=05e4f721afd2e4d73db23328665ee6a0cda3aaf0ce41abeb08a633fb3531e392",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
