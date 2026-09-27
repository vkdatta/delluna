export const name="tonality-fill";
export const id="dl_b577a9a0707c3ea61243";
export const url=new URL("../icons/tonality-fill.svg?v=f23cf16562a715af10a48ce869fa3e343b537b159099dac11aa86f60971f4b16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
