export const name="tv_with_assistant";
export const id="dl_accfd2bcb7754aff1e80";
export const url=new URL("../icons/tv_with_assistant.svg?v=f9d3789ae9da8e22ecde8aeb2abca934fe9237dcb895a7293728801e88b6cfe4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
