export const name="volcano";
export const id="dl_9a65cb930d414483be8f";
export const url=new URL("../icons/V/volcano.svg?v=386df3dcf98a13896b7106284342cb1966213c17d3a07c0395b829f7a9afe760",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
