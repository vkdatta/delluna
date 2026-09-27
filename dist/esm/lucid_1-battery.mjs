export const name="lucid_1-battery";
export const id="dl_5c646780540a401e854b";
export const url=new URL("../icons/lucid_1-battery.svg?v=a9d4fdf6f95706a0946987d1fed61a0f506cdf824e1792fbef056dc784d89007",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
