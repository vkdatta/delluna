export const name="blinds_closed-fill";
export const id="dl_6f4589cc34b789bcde0c";
export const url=new URL("../icons/blinds_closed-fill.svg?v=b890d836dbba3d9862980146087d7c5ab1629eab507103c0c9900c280151cff1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
