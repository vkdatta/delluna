export const name="diamond-close";
export const id="dl_3282c053ff0f4269a122";
export const url=new URL("../icons/close/diamond-close.svg?v=e9c7f9ae8beb859f8679fcc77448b2e3e788db3cecf789c82dcee967809d1f9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
