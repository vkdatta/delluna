export const name="fan-bold";
export const id="dl_ba43e8609093467ebf1e";
export const url=new URL("../icons/fan-bold.svg?v=1fd4fd43c62a1fbea8df30f6e665df3c7df2e3f5578b5c6fb9da83b87edd2222",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
