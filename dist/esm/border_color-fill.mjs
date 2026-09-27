export const name="border_color-fill";
export const id="dl_c184778259aab193b9d5";
export const url=new URL("../icons/border_color-fill.svg?v=93690a6c5feb01d770fd4cf196c11ca359d41693e65d9d86bf4f33405613bcb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
