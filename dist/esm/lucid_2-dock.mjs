export const name="lucid_2-dock";
export const id="dl_c3a28392f6c2418a9db8";
export const url=new URL("../icons/lucid_2-dock.svg?v=03cf01823de697633e0ca277bd6dd96cf9ce434c3a8abe15b839f727bba27465",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
