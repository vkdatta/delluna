export const name="10mp-fill";
export const id="dl_606bee4d4ebc05d8b59e";
export const url=new URL("../icons/10mp-fill.svg?v=b4ee2880bbcc8b3920f97897141d6e6c57ff1b3db529a9ce2676b31944430f11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
