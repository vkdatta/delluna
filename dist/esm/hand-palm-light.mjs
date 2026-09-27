export const name="hand-palm-light";
export const id="dl_4cef4361dee445e78c08";
export const url=new URL("../icons/hand-palm-light.svg?v=b1a19108eef11e352925d0940f1dcec12c2d01e63f5058a1833392c65cc1021a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
