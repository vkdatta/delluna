export const name="crosshair-light";
export const id="dl_6e32d35d5efb4d1f972a";
export const url=new URL("../icons/crosshair-light.svg?v=1bd475424febc0e1e095ec24dbfb752e617274f09b593bfb9f7accb21abf20a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
