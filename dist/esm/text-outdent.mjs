export const name="text-outdent";
export const id="dl_6d6c89a5d5cdd488d27e";
export const url=new URL("../icons/text-outdent.svg?v=3330ac6c58bbcc63d95d93234c28f84361eba5ae82d287d2af754b2966077c78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
