export const name="line_start_arrow-fill";
export const id="dl_c93ec872887d4bc76cfd";
export const url=new URL("../icons/line_start_arrow-fill.svg?v=5a450cf732d194af749eed593639a8145f6c72df4f8235302c498a762ead9b0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
