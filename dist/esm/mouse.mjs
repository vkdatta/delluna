export const name="mouse";
export const id="dl_a63bb08cd011edea9f54";
export const url=new URL("../icons/mouse.svg?v=1aa27beb9ba1c73349b2c497bb23e3ea6c39ba66189b4e4d794acaa1df1990c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
