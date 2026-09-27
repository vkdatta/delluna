export const name="desktop_landscape";
export const id="dl_29c14e791e2206323c3a";
export const url=new URL("../icons/desktop_landscape.svg?v=ac55f22a6ba8161cfd1ca0cdf8e91751e9e95c62b18387dbb3e904bb43c16783",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
