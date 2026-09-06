export const name="caret-line-right-light";
export const id="dl_a60ca874260e4a0087a9";
export const url=new URL("../icons/caret-line-right-light.svg?v=0d8815d31b03d02b76923d0121839c77d47230fb995464a152d809f22b2b9e3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
