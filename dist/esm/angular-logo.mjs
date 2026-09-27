export const name="angular-logo";
export const id="dl_0a903c774f3c46249abb";
export const url=new URL("../icons/angular-logo.svg?v=fba71752b95dd72d59ca992d3d7bf2b8f9b8d7fe052adb41b0bdc9023dd339be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
