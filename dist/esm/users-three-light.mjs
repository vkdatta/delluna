export const name="users-three-light";
export const id="dl_9149612f4643d9083602";
export const url=new URL("../icons/users-three-light.svg?v=f4a617abb2ffaa8a60a748403a7f3027408ad9293535cd4dea09d0c815bc01a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
