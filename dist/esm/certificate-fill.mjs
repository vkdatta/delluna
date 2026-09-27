export const name="certificate-fill";
export const id="dl_22d5a671d94d483eaa55";
export const url=new URL("../icons/certificate-fill.svg?v=a289d83745b694bc914a74ba55cf1bf1b93f565aec8f0114f825a66e94eb3ed5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
