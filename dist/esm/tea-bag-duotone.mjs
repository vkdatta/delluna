export const name="tea-bag-duotone";
export const id="dl_95c7ce1fb8d5ba9fa6ed";
export const url=new URL("../icons/tea-bag-duotone.svg?v=9559a7ff2ef7e6a7f40ed84c69b53c907a7f1fcd376772cd1fc09a4146cb9943",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
