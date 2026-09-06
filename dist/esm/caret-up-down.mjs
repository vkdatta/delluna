export const name="caret-up-down";
export const id="dl_cd733bed1fdf43ea906c";
export const url=new URL("../icons/caret-up-down.svg?v=d2e93459514746d53d152c8624fbf89356ee4e0932ab3efd094e8dce9bb0d793",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
