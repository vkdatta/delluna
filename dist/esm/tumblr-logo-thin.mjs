export const name="tumblr-logo-thin";
export const id="dl_a1e05d98bbab44878bc3";
export const url=new URL("../icons/T/tumblr-logo-thin.svg?v=7982076e993a3544e89d7bf26464308c4b3847782401e7d7140307097cf0415f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
