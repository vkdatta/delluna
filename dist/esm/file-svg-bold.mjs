export const name="file-svg-bold";
export const id="dl_649ad8b9092d42c691d0";
export const url=new URL("../icons/file-svg-bold.svg?v=042b67909fa92ecd5f2bb79594df4d1a3460b8e9e473d10be130ba90d650e1ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
