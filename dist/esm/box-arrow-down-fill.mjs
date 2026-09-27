export const name="box-arrow-down-fill";
export const id="dl_7adffea133694d18ac7d";
export const url=new URL("../icons/box-arrow-down-fill.svg?v=e7be12fe11e3848c084e4c4aa89311f5b62af306a568387e615f293f8d27e1da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
