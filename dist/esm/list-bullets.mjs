export const name="list-bullets";
export const id="dl_632974164b1e4a81afec";
export const url=new URL("../icons/list-bullets.svg?v=e09fce5450dfadae184b333982d81815d8c4a59ea9ae74b649f5464274670009",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
