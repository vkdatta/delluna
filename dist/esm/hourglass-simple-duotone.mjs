export const name="hourglass-simple-duotone";
export const id="dl_bf59dcb905534aa29ef4";
export const url=new URL("../icons/hourglass-simple-duotone.svg?v=ab1ff5e9aa74e3b3391fd1dbfcce045c7954cc1bbd3e4c7dabb0248b103e7f3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
