export const name="kitchen";
export const id="dl_6451d36f25c51834391b";
export const url=new URL("../icons/kitchen.svg?v=90083a19dee7401ddcc62e411b727d18346ca6ba78e0e8da3a149b081c8d5095",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
