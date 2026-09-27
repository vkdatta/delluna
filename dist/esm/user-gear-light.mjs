export const name="user-gear-light";
export const id="dl_af0f85abd8f08ab69648";
export const url=new URL("../icons/user-gear-light.svg?v=7f160117ec955150104764023c6022ab30536b94832f8395e9da5b9a6abd3f63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
