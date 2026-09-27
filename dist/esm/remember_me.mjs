export const name="remember_me";
export const id="dl_3994988e0d56100b2f2e";
export const url=new URL("../icons/remember_me.svg?v=f9bc167a7219503288bd56e9b8b3deb8eeec487f2e010abe05117057b446babc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
