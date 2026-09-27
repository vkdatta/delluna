export const name="folder-simple-lock-duotone";
export const id="dl_87b61e0ce152487a85fd";
export const url=new URL("../icons/folder-simple-lock-duotone.svg?v=c0028c215755ae237895523c19a22db682b459fe8bbaf54973c69494a1e95fb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
