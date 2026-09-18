export const name="toggle_on-fill";
export const id="dl_f2672d67f60d41bd8b39";
export const url=new URL("../icons/toggle_on-fill.svg?v=524a1a2123670207142dc6e9a1525ef06201013f811b877631f7ab56572b00a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
