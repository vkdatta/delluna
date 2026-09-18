export const name="media_link";
export const id="dl_fdf73c51ecd742aa8780";
export const url=new URL("../icons/media_link.svg?v=ceb85e9796d0c680d30a06d85c04e97f2d7d61425449fc036664c49e047065c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
