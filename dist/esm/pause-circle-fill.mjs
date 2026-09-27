export const name="pause-circle-fill";
export const id="dl_970eebf0ae554636a592";
export const url=new URL("../icons/pause-circle-fill.svg?v=7ed6c2fa797de90b74ab29877edae189686c8794cf780ba58c99fb7b2311f2fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
