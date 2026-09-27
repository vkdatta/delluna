export const name="lucid_3-sparkles";
export const id="dl_abc618183c8f4215b097";
export const url=new URL("../icons/lucid_3-sparkles.svg?v=8e4f27dad47c77d952dc340543beb78537947c24a5267f0a15b73578b8ceb6cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
