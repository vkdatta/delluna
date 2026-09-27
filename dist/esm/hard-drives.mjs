export const name="hard-drives";
export const id="dl_94cad8d9758e4eb4a1e8";
export const url=new URL("../icons/hard-drives.svg?v=20496e2dbee1a4ca5f008e112150c7cbed1ec9a3c901d6a2ae6aa49979982419",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
