export const name="graduation-cap-thin";
export const id="dl_487674823ca949deb619";
export const url=new URL("../icons/graduation-cap-thin.svg?v=5c53a9f576f83f5e0c1b8fa478d11364599af80e4b210e001408f51a78be7a83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
