export const name="file-svg";
export const id="dl_e28f9146b1a54bbf95cf";
export const url=new URL("../icons/file-svg.svg?v=1790e2de4066cf470de28f46438215c7d5425f3da9b7cd59e0a8e0d1840ef7e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
