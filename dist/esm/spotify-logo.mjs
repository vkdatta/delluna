export const name="spotify-logo";
export const id="dl_81105dacbbd9681f78f1";
export const url=new URL("../icons/spotify-logo.svg?v=ba16aebffc1605f7defbc5af1fbfd443c9a0db7fb4bf21fc78aec1cf71605ec8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
