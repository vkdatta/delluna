export const name="nest_display";
export const id="dl_20dd86d0347c5c10ee2f";
export const url=new URL("../icons/nest_display.svg?v=80ff5ef6ee45a97e7253700e661ecdb245c90eb94fc4101d36a5499487ed8593",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
