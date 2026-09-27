export const name="docs_apps_script";
export const id="dl_dc18c420c91560dc9017";
export const url=new URL("../icons/docs_apps_script.svg?v=72c223943c9ebe25333ef2f1925e6b15f24a569976dc52346ac21936afba93b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
