export const name="assistant_navigation-fill";
export const id="dl_2d28ee9a7eed478fb669";
export const url=new URL("../icons/assistant_navigation-fill.svg?v=7a6f71bbbea94657d195a297dcf1f7d60af2a5098986e60718f1bdde5a00e695",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
