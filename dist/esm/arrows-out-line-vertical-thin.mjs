export const name="arrows-out-line-vertical-thin";
export const id="dl_36ecf8a520b64dd38a0a";
export const url=new URL("../icons/arrows-out-line-vertical-thin.svg?v=c466401e3507b6dcec1ac529869a037abab4b8e0d28e2903746ec73aeb0ac8ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
