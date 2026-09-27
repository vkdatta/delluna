export const name="spotify-logo-fill";
export const id="dl_a385b27fb24b44a2c09a";
export const url=new URL("../icons/spotify-logo-fill.svg?v=e927f48f877bce17dfc11687962985590f54851edaefee013fb9d574e75ee741",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
