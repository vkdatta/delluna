export const name="photo_auto_merge";
export const id="dl_8e2b77ec59d840d9bc4b";
export const url=new URL("../icons/photo_auto_merge.svg?v=08276530f56fb91c404b77ff051cc6dcc6358dde4aeb20bd0092a825d53d735c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
