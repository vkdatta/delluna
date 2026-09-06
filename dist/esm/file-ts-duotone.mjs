export const name="file-ts-duotone";
export const id="dl_3fcf6a1ed79f48cbbcc6";
export const url=new URL("../icons/file-ts-duotone.svg?v=6847b14448050df9c66ba205063af3600bfe52b3f79f1cbed079699277abd5da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
