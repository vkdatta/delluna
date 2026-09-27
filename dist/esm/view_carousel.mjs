export const name="view_carousel";
export const id="dl_f6147d7da61c4015e34c";
export const url=new URL("../icons/view_carousel.svg?v=249266d35525298ca40032742e210ca37b6a16fe0a41190958887869bcec19b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
