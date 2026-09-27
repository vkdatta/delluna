export const name="cookie_off";
export const id="dl_1a08a089a83ae5a8a3f8";
export const url=new URL("../icons/cookie_off.svg?v=2975e8841868947b4234416b25886e54d230c8a2e4ed0623b96a93ad8746fabf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
