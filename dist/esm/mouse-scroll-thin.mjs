export const name="mouse-scroll-thin";
export const id="dl_a20249440bd74a8d9b88";
export const url=new URL("../icons/mouse-scroll-thin.svg?v=7551d490349a16a88907470b361a7b2ec08f3b0ca5e268e7222917a2f8fb92df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
