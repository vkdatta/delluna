export const name="text-t";
export const id="dl_3cf1a5e0b27dca0740d4";
export const url=new URL("../icons/text-t.svg?v=8930957f6c8260957dae7f9fb90d7bedd357fd5d2a5182ad66c0ded4175af101",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
