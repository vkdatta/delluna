export const name="tab_close_inactive";
export const id="dl_a3641e9c2fb2cd2e1cf5";
export const url=new URL("../icons/tab_close_inactive.svg?v=3f8b46fda06c95046c340cbe56799889b0c5b5eaedbb13082969276cb07d6b95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
