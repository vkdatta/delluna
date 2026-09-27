export const name="door-duotone";
export const id="dl_f300950a293741ee8799";
export const url=new URL("../icons/door-duotone.svg?v=1e2015db57dd31c88ce29e1b3834bcae7e64874792903f8f93abfe2b564fcbc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
