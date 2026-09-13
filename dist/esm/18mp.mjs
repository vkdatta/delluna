export const name="18mp";
export const id="dl_f85c3fca0ad94e22b795";
export const url=new URL("../icons/1/18mp.svg?v=32f950a338daf23cec921723b919c7b7481cdddef4509ed6fd60f852a5d2fd01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
