export const name="measuring_tape";
export const id="dl_cc8d019fdb2f010e3828";
export const url=new URL("../icons/measuring_tape.svg?v=72fb0d88ee7b3bd11d16a5d111c7e6eadc1c9affe87d030f510e48586c036870",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
