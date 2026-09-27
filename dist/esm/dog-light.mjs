export const name="dog-light";
export const id="dl_e35c8fcda66f4ca38e58";
export const url=new URL("../icons/dog-light.svg?v=fd45408dd8bce3e2e0eb6997e1938cc35d443805389c094e843464f93a2dc1e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
