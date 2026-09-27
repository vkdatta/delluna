export const name="toggle_on-fill";
export const id="dl_6a4ff2fa1be7f1c8b3e1";
export const url=new URL("../icons/toggle_on-fill.svg?v=524a1a2123670207142dc6e9a1525ef06201013f811b877631f7ab56572b00a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
