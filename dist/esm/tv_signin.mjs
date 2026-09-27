export const name="tv_signin";
export const id="dl_80a8a634a879f6146e10";
export const url=new URL("../icons/tv_signin.svg?v=a11638738161cb165497fa1f41ca6b11a33b506aef904c5cb0babae39f6b7789",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
