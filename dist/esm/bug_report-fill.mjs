export const name="bug_report-fill";
export const id="dl_63cd6286473dfbd6f293";
export const url=new URL("../icons/bug_report-fill.svg?v=4ed97a43ac4bfeb3887d4fd8dd7486ae62c23c3dd1e1eee69ddb5ea53d7ab09e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
