export const name="rectangle-thin";
export const id="dl_f445e38a1b4d404a8a7a";
export const url=new URL("../icons/rectangle-thin.svg?v=113a6e970ac60cd21f1cbd83d5a9552b091e8a6c97b3a3a22fb89655d7396d71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
