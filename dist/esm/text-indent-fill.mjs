export const name="text-indent-fill";
export const id="dl_36afb167d24e29bdac3c";
export const url=new URL("../icons/text-indent-fill.svg?v=c8a680c416044c29710a617a92576fc689cfd98870d790e063536ef29e2553ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
