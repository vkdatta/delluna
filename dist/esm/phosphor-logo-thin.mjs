export const name="phosphor-logo-thin";
export const id="dl_b4e6f5889cb14696bbca";
export const url=new URL("../icons/phosphor-logo-thin.svg?v=33818cba428655661653384c9dcbaab6b72c029799754f58326f910b1fa177a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
