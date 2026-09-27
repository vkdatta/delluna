export const name="tote-simple-light";
export const id="dl_c47e2ad0f18717ec3c00";
export const url=new URL("../icons/tote-simple-light.svg?v=48e94ed33560ecf76e92a3431cf95789bc4c0ab06abdb47f97e6bb0b080e8477",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
