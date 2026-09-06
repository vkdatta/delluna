export const name="radical-duotone";
export const id="dl_10b28ddfcda7430e8924";
export const url=new URL("../icons/radical-duotone.svg?v=fb9695eb30e4db7e54432d4195295f6d155aabffb654e8577e6d736407b79443",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
