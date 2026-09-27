export const name="battery-vertical-empty-fill";
export const id="dl_7461c42e2c0149b28113";
export const url=new URL("../icons/battery-vertical-empty-fill.svg?v=25e983b5626b9990bf2f6afd7920d776faa66e9566693a3220786e92f958e67b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
