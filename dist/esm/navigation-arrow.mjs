export const name="navigation-arrow";
export const id="dl_86ac897c305d4a43a424";
export const url=new URL("../icons/navigation-arrow.svg?v=742ca974416fcf7dd290395ab38a19da6064bf1e07ca5a72ea4353efda9e90dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
