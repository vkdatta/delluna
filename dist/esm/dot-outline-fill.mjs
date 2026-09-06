export const name="dot-outline-fill";
export const id="dl_44a905ac3fb746408ac7";
export const url=new URL("../icons/dot-outline-fill.svg?v=c014789f53488562581629996d3b077ed6e26eb84f21c56d39be558ebe3c7f5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
