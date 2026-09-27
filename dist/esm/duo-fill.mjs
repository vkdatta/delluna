export const name="duo-fill";
export const id="dl_3ffba6a2711d9d7dade7";
export const url=new URL("../icons/duo-fill.svg?v=d364efe0159e84a8bfc2299c19443689f48e2b621844415a8ac4e592e4a1ae05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
