export const name="link_off-fill";
export const id="dl_a4ac490fe7d157c57a08";
export const url=new URL("../icons/link_off-fill.svg?v=2631108a8cb7e40b58ff919cd15dc6e6a215d183e308c8f72d868eed7176ac30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
