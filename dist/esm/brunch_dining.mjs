export const name="brunch_dining";
export const id="dl_56e62245611ae2ba2802";
export const url=new URL("../icons/brunch_dining.svg?v=14ee17f287ae7968e74230fd616ca6025832979b1b5c8697ab0a0ea3e19f0372",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
