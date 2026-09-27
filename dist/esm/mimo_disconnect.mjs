export const name="mimo_disconnect";
export const id="dl_dab6b6f0dc9d924bc547";
export const url=new URL("../icons/mimo_disconnect.svg?v=0ae7c835d9e859d1f030b3392b82bbac2fee97c090f57a26812f9ba069277eca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
