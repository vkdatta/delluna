export const name="arch-dismiss";
export const id="dl_54a613fbcc77c6cdb4e1";
export const url=new URL("../icons/arch-dismiss.svg?v=4553692767c55ba01ed7a2de62107a3d3c44cf691b445771337dbe0f674aa5f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
