export const name="download_2-fill";
export const id="dl_10cdeb602550310a3a51";
export const url=new URL("../icons/download_2-fill.svg?v=f2cd5533e9dfba40b142f887088796569e420e7a3950989384bd7d311bbbfa31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
