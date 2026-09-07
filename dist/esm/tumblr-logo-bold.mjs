export const name="tumblr-logo-bold";
export const id="dl_2df235585993479f8ebc";
export const url=new URL("../icons/T/tumblr-logo-bold.svg?v=7c3bae5793730d82b293d57676b7b17154ba22879e413bf85961b02cde1190a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
