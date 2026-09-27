export const name="speaker";
export const id="dl_7eeb37bc3287c3b9acd5";
export const url=new URL("../icons/speaker.svg?v=dd09fffc9e56316cb875457870658258cd39848091a041e493d95ac81e938fa3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
