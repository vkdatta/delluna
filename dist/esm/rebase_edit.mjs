export const name="rebase_edit";
export const id="dl_0ddc80eb1ccb12e42618";
export const url=new URL("../icons/rebase_edit.svg?v=4e069c52744a1a6c0f3eee34f857509124db6227fff6dea1b9330ac971ca293b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
