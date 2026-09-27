export const name="hangout_video-fill";
export const id="dl_3f67ddd0bcfdd601252f";
export const url=new URL("../icons/hangout_video-fill.svg?v=d2eeeb6778a500eaf1f4d626dde94d1805ae0a2d3e7631148881ca7af5c6fc43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
