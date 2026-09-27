export const name="tty-fill";
export const id="dl_98dd3aa348edf179de77";
export const url=new URL("../icons/tty-fill.svg?v=bc9e78e8e03ee9e42a959470f1b501c9844f43e41700b55a89ad09ae512fb008",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
