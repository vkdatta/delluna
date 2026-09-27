export const name="chess_bishop-fill";
export const id="dl_9819eddbea75bab055d9";
export const url=new URL("../icons/chess_bishop-fill.svg?v=d56112101f670ac6e79f4393d671600f6ec397f705f7a80a47d9dd3fc00ef518",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
