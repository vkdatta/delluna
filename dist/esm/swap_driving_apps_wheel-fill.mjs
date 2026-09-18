export const name="swap_driving_apps_wheel-fill";
export const id="dl_ea0d38fb10b140d0946a";
export const url=new URL("../icons/swap_driving_apps_wheel-fill.svg?v=058aa47457161fcddaf279ccc9ae1da085c49c75ffda70ff21d899a0dfed1655",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
