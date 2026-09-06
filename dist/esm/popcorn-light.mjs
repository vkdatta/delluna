export const name="popcorn-light";
export const id="dl_05a709885b064d39a2c1";
export const url=new URL("../icons/popcorn-light.svg?v=a80f277de9073c3db36df00fda9b2405a3a4b5fa36f3b1ba80622b0f9619d4a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
