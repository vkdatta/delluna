export const name="preview_off-fill";
export const id="dl_091d1b613f6f60b85cd0";
export const url=new URL("../icons/preview_off-fill.svg?v=664fdd0049ae23c8145192e1df7b216e1ffe267895597fb140a0c3baf7506124",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
