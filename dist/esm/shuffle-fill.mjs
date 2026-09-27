export const name="shuffle-fill";
export const id="dl_4b2fe13da091485f6ffa";
export const url=new URL("../icons/shuffle-fill.svg?v=94b07b7471860fd301686563a33804f46757d3c823b5e0e4d806f1cafc65d9a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
