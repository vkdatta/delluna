export const name="browse-fill";
export const id="dl_1258b0979a814239a50b";
export const url=new URL("../icons/B/browse-fill.svg?v=d0030b498c9c8aa135e7b250c92e945d527e789ee611b8b5e2567804c77416ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
