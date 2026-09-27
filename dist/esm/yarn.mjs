export const name="yarn";
export const id="dl_d833d742c9a5321ebcca";
export const url=new URL("../icons/yarn.svg?v=44f628d5b3a107495d6f9174c5129c7e1a2107ace796117443236b10fab947a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
