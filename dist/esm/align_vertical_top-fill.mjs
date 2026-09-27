export const name="align_vertical_top-fill";
export const id="dl_a1daad5f76ae11cb9b6b";
export const url=new URL("../icons/align_vertical_top-fill.svg?v=856707c8e549ee1cc2fea95026ae9999a6da160cb1350def0af76a4ae319fd6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
