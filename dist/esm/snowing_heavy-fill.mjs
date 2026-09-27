export const name="snowing_heavy-fill";
export const id="dl_f30899a43fee7c6c925e";
export const url=new URL("../icons/snowing_heavy-fill.svg?v=78ca61a47ca75e776b5cbe24b66bd04a7f32e5c07dc3581a442e12d7bcd30bc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
