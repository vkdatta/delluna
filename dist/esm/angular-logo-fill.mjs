export const name="angular-logo-fill";
export const id="dl_61c9e27a5a32480d9da0";
export const url=new URL("../icons/angular-logo-fill.svg?v=b4564ca9eff8e963c8df89e6b639b0abedced4708bcf83b147d1d37598736a78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
