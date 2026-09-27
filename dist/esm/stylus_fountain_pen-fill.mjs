export const name="stylus_fountain_pen-fill";
export const id="dl_4b67c4a4cb6f8828427a";
export const url=new URL("../icons/stylus_fountain_pen-fill.svg?v=7aa916b22f9969e3f990c271ae3ab5bbfcc54d026d12d0f8ca13967826f2a6e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
