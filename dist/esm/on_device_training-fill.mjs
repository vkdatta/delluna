export const name="on_device_training-fill";
export const id="dl_809d5d547acbaa25b873";
export const url=new URL("../icons/on_device_training-fill.svg?v=47b3335d46693b185ffaf0c4986a8f73c201b5e6fdfacb9ab2309325dc8df0e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
