export const name="wifi-cog";
export const id="dl_924e752c066743e6bfd5";
export const url=new URL("../icons/wifi-cog.svg?v=c4805d5de4a83cea086f28200cdb9f52ca9de7fe4990e48b27d3baacf6591d35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
