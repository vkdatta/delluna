export const name="gauge";
export const id="dl_2c6bfae0d1074231b09a";
export const url=new URL("../icons/gauge.svg?v=bd1d0cab53da5ec79fce5b6d441e45404948ad49601bd96f77fb896b9a7e89a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
