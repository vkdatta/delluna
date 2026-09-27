export const name="brackets-angle-bold";
export const id="dl_2684d38a71524e309bef";
export const url=new URL("../icons/brackets-angle-bold.svg?v=20d90a76a18a8227c9c641bde1975c0d783a890c358af4da7bd5cc9c69969e73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
