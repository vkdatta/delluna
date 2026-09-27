export const name="discord-logo-thin";
export const id="dl_1c82b7208d6b48e4bea8";
export const url=new URL("../icons/discord-logo-thin.svg?v=b407aef71c6dd9052331f636c74b1bac605caeed97a3cb2b7d7d0b44d63edd9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
