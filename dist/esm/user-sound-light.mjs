export const name="user-sound-light";
export const id="dl_5db168071dfcdb393da3";
export const url=new URL("../icons/user-sound-light.svg?v=b84be161ad60fe8ca05cc5e6921da8e7d8bb4a4069ee202453c67563d0cf7e31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
