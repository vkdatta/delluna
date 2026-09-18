export const name="group_remove";
export const id="dl_1052358c77f5426282a9";
export const url=new URL("../icons/group_remove.svg?v=765fb7668fc792f7120af371416fce4cce3c7957c4d074299e5c6ea5ea5a493d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
