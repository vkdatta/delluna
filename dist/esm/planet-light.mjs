export const name="planet-light";
export const id="dl_6cf89efc13824d248ab4";
export const url=new URL("../icons/planet-light.svg?v=22c105aa6b85a509e6ea0e185345cd9ce2e8834792fd4afce7560993e21a9806",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
