export const name="computer-fill";
export const id="dl_964b1ab213c91db926e1";
export const url=new URL("../icons/computer-fill.svg?v=7ada87da604cc7a5d5cdc7604ac9f892ce329d6de2eeb30cef2e95eafa43f09c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
