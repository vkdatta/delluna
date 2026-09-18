export const name="takeout_dining-fill";
export const id="dl_4dc1a67ac5f34a798c07";
export const url=new URL("../icons/takeout_dining-fill.svg?v=9ad8e66ec779420ceb9322cc033b4cb209009721a635d51e55a5c259c27987e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
