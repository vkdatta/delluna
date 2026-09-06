export const name="figma-logo";
export const id="dl_7ec133c3801d4706a431";
export const url=new URL("../icons/figma-logo.svg?v=e7956e706408eb40b0075b5ac5bcd9ebe8eb2992f3747698009dd955af4f476a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
