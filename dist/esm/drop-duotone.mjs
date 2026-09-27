export const name="drop-duotone";
export const id="dl_c57abf3ac72e4c808a3b";
export const url=new URL("../icons/drop-duotone.svg?v=432ddd4929ce8f782bdade461a9d7a247e1e11021cec493ad37935a5f634b4cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
