export const name="lucid_3-scan-text";
export const id="dl_ac67c393baad4d29866f";
export const url=new URL("../icons/lucid_3-scan-text.svg?v=8b0156a0e1290ed1a0458d0853c7d2322adad38a5478b6d48afc7f4d1cf21c7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
