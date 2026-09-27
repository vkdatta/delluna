export const name="dice-one-light";
export const id="dl_ec61e488d1d945239a65";
export const url=new URL("../icons/dice-one-light.svg?v=8772e0b396dc0a85954fad62eca03e9edb25017f142bc913ee5404116bf0f10e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
