export const name="truck-trailer-light";
export const id="dl_b86baeeb1d3dfc733c35";
export const url=new URL("../icons/truck-trailer-light.svg?v=bca568e4fa6c9a9d7fda3e6cfe05e67c2b81e429d5c9feffd7bc6e838cd09bfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
