export const name="number-nine-fill";
export const id="dl_e86866f3b93e4b50b2ca";
export const url=new URL("../icons/number-nine-fill.svg?v=e6507942346f8a7ff578adf53cfc0a9bd327cecc9734df81203cfc7bbdfbb0d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
