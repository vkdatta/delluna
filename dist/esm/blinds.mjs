export const name="blinds";
export const id="dl_fe84071b7955abb61c9d";
export const url=new URL("../icons/blinds.svg?v=e1808f3655f3d8c06730e94d3b100b8f39ae7d6947317d5cf8f5a03d1f6ed590",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
