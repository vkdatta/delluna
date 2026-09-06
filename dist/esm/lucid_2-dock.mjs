export const name="lucid_2-dock";
export const id="dl_c3a28392f6c2418a9db8";
export const url=new URL("../icons/lucid_2-dock.svg?v=797b03321c81e197cbe9a0ac36257e04376ca6282a011c310fb5d62b87f830e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
