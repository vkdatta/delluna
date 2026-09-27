export const name="info";
export const id="dl_308523e5cf143553e4fb";
export const url=new URL("../icons/info.svg?v=eef59897ac727ab43384572c83ccb0f9c5d1242f3fdcd02fbc6c136c2aaf28ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
