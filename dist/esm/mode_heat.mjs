export const name="mode_heat";
export const id="dl_cc3a24128465a725be5e";
export const url=new URL("../icons/mode_heat.svg?v=35bbd64b3241ae04aea64911a5fed1e31236d61ae1b5dbcca90a38aee3502963",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
