export const name="presentation-thin";
export const id="dl_b095ff9726834cbfb7f7";
export const url=new URL("../icons/presentation-thin.svg?v=ca2d1c51f893de13f212b04b3b375d71a821ceeb85513f9cf81718ed76d511f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
