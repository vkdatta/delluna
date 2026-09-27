export const name="lucid_2-hard-drive";
export const id="dl_ea5e7c000d154ecd90aa";
export const url=new URL("../icons/lucid_2-hard-drive.svg?v=84eca44df89ad00d0f882eee591cc44432ec6e94babbf859aca4f0a86812a659",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
