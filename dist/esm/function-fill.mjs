export const name="function-fill";
export const id="dl_b93b10347d3c4ceba0bf";
export const url=new URL("../icons/function-fill.svg?v=87785963ed8cf8f26685a3e89eaf987b6fb638056a17c04f63a07c2bb23cae97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
