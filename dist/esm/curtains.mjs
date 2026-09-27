export const name="curtains";
export const id="dl_b87e49113aaf2722d59e";
export const url=new URL("../icons/curtains.svg?v=caf211a796dd4c4e209049860d43741925a9d60a8c331869f0ff3a879254fc4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
