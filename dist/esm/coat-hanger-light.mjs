export const name="coat-hanger-light";
export const id="dl_8d9e6e2e4b6f4cf6958b";
export const url=new URL("../icons/coat-hanger-light.svg?v=00d6b4555e91bb439bcc6a78c3341b27b26c2694d8b10eca019ee4d022cfd7bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
