export const name="text-subscript-duotone";
export const id="dl_92fb142f1c6643e969a3";
export const url=new URL("../icons/text-subscript-duotone.svg?v=dd9581389505b720924de93ec1ef59911b6e81e8a3bdfeef8f7d85cf82b7c976",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
