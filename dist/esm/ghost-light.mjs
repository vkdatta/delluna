export const name="ghost-light";
export const id="dl_7f9c45306d2c40e5bbd2";
export const url=new URL("../icons/ghost-light.svg?v=c1f5221979ddffe8bb85a3e9cb197e14e9e1c32c5be4871b2c10283669aa94d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
