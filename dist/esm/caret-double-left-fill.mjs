export const name="caret-double-left-fill";
export const id="dl_9ee18b61c9924c089d52";
export const url=new URL("../icons/caret-double-left-fill.svg?v=b0354e626d0b629a167b8a12bc66b955c09274201ba56389e8883aeca04a7712",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
