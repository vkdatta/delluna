export const name="mode_heat-fill";
export const id="dl_1fe68b31ae10f191a066";
export const url=new URL("../icons/mode_heat-fill.svg?v=868107d4e788166485fb9c77b4fd2c40f21f6f32e6c4465f9fdef2e7c950c8c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
