export const name="swap-bold";
export const id="dl_a0ebaa32d799e5bffb88";
export const url=new URL("../icons/swap-bold.svg?v=beec5d25ec28fc655f0d0695d8d2486b8422b7a4355b1fbff2443bb0c0686c75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
