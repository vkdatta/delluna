export const name="memory-thin";
export const id="dl_c2c8334434634e71a958";
export const url=new URL("../icons/memory-thin.svg?v=351bc02eb8c57b843ee7b06a7d730f2e3ff4fb944c931c235d8f559d3a6c70d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
