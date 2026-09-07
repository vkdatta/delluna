export const name="volleyball-fill";
export const id="dl_571e1846f21e4ea9b308";
export const url=new URL("../icons/V/volleyball-fill.svg?v=44e2efd42c0f9dc8afe14616cbaae528af84d6796aac7c89f8a0ddf95d78a8c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
