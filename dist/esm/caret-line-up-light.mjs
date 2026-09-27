export const name="caret-line-up-light";
export const id="dl_82e73eccf65e48fab5d0";
export const url=new URL("../icons/caret-line-up-light.svg?v=2964eae2e5162d96ef78b9e4d3df368305801736878186268bae2fb68a4739d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
