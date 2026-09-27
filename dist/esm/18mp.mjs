export const name="18mp";
export const id="dl_b1397e4e64f201566b9e";
export const url=new URL("../icons/18mp.svg?v=32f950a338daf23cec921723b919c7b7481cdddef4509ed6fd60f852a5d2fd01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
