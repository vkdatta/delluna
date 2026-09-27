export const name="arrow-circle-up-right";
export const id="dl_07d5efadfb95480887c4";
export const url=new URL("../icons/arrow-circle-up-right.svg?v=7cadc986f9bbda49b6021dccfb07cc72d9860e2e3ce95d2728a43760786a2d7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
