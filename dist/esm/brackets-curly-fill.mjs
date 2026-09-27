export const name="brackets-curly-fill";
export const id="dl_1b56e0834cb445ca828f";
export const url=new URL("../icons/brackets-curly-fill.svg?v=31e0072b9e1a548707843ffd359970ba43f9326e83ab02c6e7f9911d2d33f704",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
