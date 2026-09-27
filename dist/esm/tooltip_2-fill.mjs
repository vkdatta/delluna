export const name="tooltip_2-fill";
export const id="dl_2f27b72c255b61dcb0a0";
export const url=new URL("../icons/tooltip_2-fill.svg?v=c0c63b7b008c4e928ba6f0997100c992bb246c25de97c5001667d48395bb6c05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
