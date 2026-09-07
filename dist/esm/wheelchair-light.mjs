export const name="wheelchair-light";
export const id="dl_15f814698a7d41cba670";
export const url=new URL("../icons/W/wheelchair-light.svg?v=5927387fad797126297fcada94017d6bafcfc97f86f849dcd847ed8302e0eae4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
