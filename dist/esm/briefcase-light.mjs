export const name="briefcase-light";
export const id="dl_73821e8b628a42c6a589";
export const url=new URL("../icons/briefcase-light.svg?v=5eb3723914a49baa936fd2718647bd419cdd3c2da93f743c6975063f55dc33e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
