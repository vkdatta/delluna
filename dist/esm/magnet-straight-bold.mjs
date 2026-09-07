export const name="magnet-straight-bold";
export const id="dl_9cba3e4ad8584d44aeb7";
export const url=new URL("../icons/magnet-straight-bold.svg?v=27e9a7b06a259841005ae8661623051cfc091ec8c249391e707eb3167f381161",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
