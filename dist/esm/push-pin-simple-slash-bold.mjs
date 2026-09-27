export const name="push-pin-simple-slash-bold";
export const id="dl_fac980b7434f4368918f";
export const url=new URL("../icons/push-pin-simple-slash-bold.svg?v=a1c857b976065a3db6022166bb7691c12fd0a0bc2fb2cdc84936c598d314f1a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
