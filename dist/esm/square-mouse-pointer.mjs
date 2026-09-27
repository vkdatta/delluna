export const name="square-mouse-pointer";
export const id="dl_6696f75afe594bbab860";
export const url=new URL("../icons/square-mouse-pointer.svg?v=9858559e4f313b159852c6a855591ca44be008f8c5545e18a51293e56dbbda05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
