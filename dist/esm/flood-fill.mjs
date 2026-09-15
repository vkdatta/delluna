export const name="flood-fill";
export const id="dl_88c8f3784eff4860ad64";
export const url=new URL("../icons/F/flood-fill.svg?v=c54c96f5037c6168a9452260a9aaf9898908667198de9e36406d354922ceef3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
