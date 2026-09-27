export const name="label_off";
export const id="dl_be39591f6b7568e209c4";
export const url=new URL("../icons/label_off.svg?v=b87e15797c8f09dea2a40efa902b1de00aeee13f4c7861af22b6c74a51352b32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
