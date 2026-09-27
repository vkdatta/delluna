export const name="hard_disk-fill";
export const id="dl_05a47db4763cc95fbc52";
export const url=new URL("../icons/hard_disk-fill.svg?v=8541483c287696f0d7f9aa1bd7fb211780dbb56b62afc1a4945c239674dad8b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
