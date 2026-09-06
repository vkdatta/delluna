export const name="lock-bold";
export const id="dl_b3f68fffd3314cd09197";
export const url=new URL("../icons/lock-bold.svg?v=ab4870ee89aa374f2df8c9ff11c2c1ae4f4fcc28b5221503bb3d3c8d3da721ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
