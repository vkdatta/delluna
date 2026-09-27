export const name="lucid_2-dock";
export const id="dl_c3a28392f6c2418a9db8";
export const url=new URL("../icons/lucid_2-dock.svg?v=d78cdf2d95a8d905fa8fb606e7de3002a59438301f3af9da32c7b6bf1c967fcd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
