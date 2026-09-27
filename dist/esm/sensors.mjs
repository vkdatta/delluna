export const name="sensors";
export const id="dl_42e75e9804b483240c20";
export const url=new URL("../icons/sensors.svg?v=c5dba25bd2f68c7a37d5cd464789381db94719bf809994274b265c085e98c81e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
