export const name="headlights";
export const id="dl_8db3ffee892b49bda48a";
export const url=new URL("../icons/headlights.svg?v=09c0e096c059d2157d86395fb38c6b972cb01e32bb0e721ec84d58b81173c7e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
