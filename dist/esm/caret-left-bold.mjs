export const name="caret-left-bold";
export const id="dl_161adcc8f5024cfb9d95";
export const url=new URL("../icons/caret-left-bold.svg?v=b78b6f532b53b9847340961848cb9e4f5be7e1da07e9dcf11c60cf64aa3986b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
