export const name="scribble-light";
export const id="dl_646d4e989414c96c5ad9";
export const url=new URL("../icons/scribble-light.svg?v=1e84ebb1502506ca4a181ee9ee3002e61c7d16e53204eb0cbb5e8c6ed659ef09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
