export const name="car-profile-light";
export const id="dl_234fd198c9b64739ade3";
export const url=new URL("../icons/car-profile-light.svg?v=e5236390c06f58ad92e1eec71bb8fd2b15033eb2bc3757aee5fa1103ae7f3e6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
