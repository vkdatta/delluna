export const name="cloud-snow-light";
export const id="dl_699e1f422339447ca538";
export const url=new URL("../icons/cloud-snow-light.svg?v=6f63ce4e94616448ebb761b8061fa526a8d68f8103b32c7097d6065e3e593828",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
