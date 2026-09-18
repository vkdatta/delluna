export const name="line_start_arrow-fill";
export const id="dl_cd3a649c9f07466595e2";
export const url=new URL("../icons/line_start_arrow-fill.svg?v=7e0eaf24586c024c4b52f8bb280c312d811b992def26e3c8f6d7636e5f8fbac6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
