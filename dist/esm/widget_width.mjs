export const name="widget_width";
export const id="dl_6a2520eb9c95ad3fd029";
export const url=new URL("../icons/widget_width.svg?v=bf24d38222cceac9a7ac46a0b90203459bb175ecd3ddf8e891d25c750ae39951",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
