export const name="sun-horizon-fill";
export const id="dl_1ef482f00d620ec41bf3";
export const url=new URL("../icons/sun-horizon-fill.svg?v=efad1ca3dec4235e18371208fc695596e5db4b65aac8f5796a95d6d0f7ffedf1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
