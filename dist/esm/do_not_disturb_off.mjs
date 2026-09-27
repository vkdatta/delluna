export const name="do_not_disturb_off";
export const id="dl_f153ad3c7195b1c7e983";
export const url=new URL("../icons/do_not_disturb_off.svg?v=e3f8b18e10346abcbf6dbb26f1882bd3aa4cdc8ea051b4546f7e651e839ee598",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
