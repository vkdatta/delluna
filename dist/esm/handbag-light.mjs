export const name="handbag-light";
export const id="dl_4ddb8dd263ce4d2e8e54";
export const url=new URL("../icons/handbag-light.svg?v=29929d2b05f63ec8a86f98a2e94a3c7851dad633d645079e6dcc4cf665b5dce2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
