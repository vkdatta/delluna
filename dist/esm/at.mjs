export const name="at";
export const id="dl_537d3346108f45e78848";
export const url=new URL("../icons/at.svg?v=63504ffdc7fb955f93eea5478e066448f5552d765ee3f185a13eba71fd5a015f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
