export const name="hand-grabbing";
export const id="dl_0c54039f560a4327ac5f";
export const url=new URL("../icons/hand-grabbing.svg?v=c75195bc433dde9404e2e119e3bb0607b30c6045989042328e0139b654825c9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
