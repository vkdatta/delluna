export const name="lucid_2-lens-convex";
export const id="dl_85f41969e5164830b7c7";
export const url=new URL("../icons/lucid_2-lens-convex.svg?v=d99626cb1aab956ae212c77b35742bffdf64035299f4f83cae244d28951a82e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
