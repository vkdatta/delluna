export const name="left_panel_open";
export const id="dl_6cc9790c8a730a92fdb2";
export const url=new URL("../icons/left_panel_open.svg?v=24ac0f8e8be01aaea0ca5a4b81dc4ff55c63103b3893a673470b52815aed5cd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
