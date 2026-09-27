export const name="lock-thin";
export const id="dl_d2953198cff44555ac7c";
export const url=new URL("../icons/lock-thin.svg?v=6bfc6a8ae2dab55bc18624ae87ed1330c46b03d2e2cadd0a625230a427cdcd4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
