export const name="lucid_3-smartphone";
export const id="dl_fddf5fdb7f9b4a028330";
export const url=new URL("../icons/lucid_3-smartphone.svg?v=ab919ed9159a8fa5977a27b8098f03d1d1e7ee2611e48e1613ce53e241acc61b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
