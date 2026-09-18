export const name="microwave_gen-fill";
export const id="dl_52aeadb952614d168429";
export const url=new URL("../icons/M/microwave_gen-fill.svg?v=2ab5e94122d87b86b87c686785e8d6e9c411e62168a6626f57309880d5aa7c44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
