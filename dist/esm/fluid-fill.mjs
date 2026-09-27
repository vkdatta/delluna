export const name="fluid-fill";
export const id="dl_6d8aa6cf99b8a41164d1";
export const url=new URL("../icons/fluid-fill.svg?v=f7900213df97d54f4b57db5d1d739263c5618bda7750fde742f75ee451e37b44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
