export const name="error";
export const id="dl_ea52e04b9c3e037a6fcd";
export const url=new URL("../icons/error.svg?v=9d95ea62e30e5e10bdd0e144d5ee2537f49cd088ffc6d94c3afb819b559f96af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
