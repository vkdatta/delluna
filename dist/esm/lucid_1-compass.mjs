export const name="lucid_1-compass";
export const id="dl_2685ce46ba2746bdabf7";
export const url=new URL("../icons/lucid_1-compass.svg?v=8558153a7ddd9cf62474a8fe1577840f10a75c8cbd3931e2dc3f3ce70243aad4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
