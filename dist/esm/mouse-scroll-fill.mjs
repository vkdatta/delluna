export const name="mouse-scroll-fill";
export const id="dl_fc73056a6f9c467ab3f6";
export const url=new URL("../icons/mouse-scroll-fill.svg?v=e3b531834d6f314c458ac6c7b99fd35f774727e77a3619f35aee3a48aaa1b1fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
