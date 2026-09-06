export const name="reddit-logo-fill";
export const id="dl_ee1a188f9cc34e2197e7";
export const url=new URL("../icons/reddit-logo-fill.svg?v=f6e1c29f724ad06cf8ab8c41e26a72a482e6187724ac7cc91fe880b9c499873d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
