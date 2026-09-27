export const name="diamonds-four-light";
export const id="dl_f5d419ce36424027a51a";
export const url=new URL("../icons/diamonds-four-light.svg?v=c2002ec73324fc90c218422c58b6315cc4c7bab2d3654287c4aa7c395793a9bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
