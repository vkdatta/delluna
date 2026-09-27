export const name="lucid_3-monitor-dot";
export const id="dl_56f2cb4a11c944d880ee";
export const url=new URL("../icons/lucid_3-monitor-dot.svg?v=745f313e596c26eb48eee998694d6231fdf16abf2d6efe8aea2d5f544a1c8878",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
