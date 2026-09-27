export const name="thumbnail_bar-fill";
export const id="dl_43590f8059150bf4b7f4";
export const url=new URL("../icons/thumbnail_bar-fill.svg?v=c0ba6b385fb760049e33e84bb364ae19e54fcbcee493b51ddd856f6beb390994",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
