export const name="speaker";
export const id="dl_8c145fc3dfee4255a4ed";
export const url=new URL("../icons/S/speaker.svg?v=dd09fffc9e56316cb875457870658258cd39848091a041e493d95ac81e938fa3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
