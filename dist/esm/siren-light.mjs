export const name="siren-light";
export const id="dl_68d9f3db26a44c2c91cc";
export const url=new URL("../icons/S/siren-light.svg?v=157a69c7901e3caee79d9a368a6537f4bee02636ade531c3e14350144ed4ceef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
