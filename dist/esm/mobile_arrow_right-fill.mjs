export const name="mobile_arrow_right-fill";
export const id="dl_c69b9f1d6c7742d79a89";
export const url=new URL("../icons/M/mobile_arrow_right-fill.svg?v=db83feb5cc1f8768e740084d071ed5b6ab1bfb7d063fc7c2a762801759366d7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
