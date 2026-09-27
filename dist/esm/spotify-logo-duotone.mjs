export const name="spotify-logo-duotone";
export const id="dl_eee3f8e1ad28c531dff2";
export const url=new URL("../icons/spotify-logo-duotone.svg?v=d584e7d7cc940d88760af965e1522f6ecf6906a8b6c12c9cde19f3eb5208173e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
