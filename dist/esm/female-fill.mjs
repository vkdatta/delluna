export const name="female-fill";
export const id="dl_eb9f5a1d0317468c8773";
export const url=new URL("../icons/F/female-fill.svg?v=45e268b5cc582a5901d168a437810aa47734ba00ff1b75e8c8092ad4b44e9c02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
