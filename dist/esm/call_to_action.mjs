export const name="call_to_action";
export const id="dl_71dcb94bef7e4d28376b";
export const url=new URL("../icons/call_to_action.svg?v=68bbe4a458b6fea7b4c8510e2efb3d54576c58c040cac4a1a10331d5e61c1cd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
