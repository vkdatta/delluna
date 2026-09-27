export const name="view_comfy_alt-fill";
export const id="dl_b49db076aa66c34adc3d";
export const url=new URL("../icons/view_comfy_alt-fill.svg?v=6d7156b9bd3745ba70c1cb27f010ae8622ac76fe8c8c0305ca89ba3d36e03308",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
