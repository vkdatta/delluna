export const name="pin_drop-fill";
export const id="dl_98c780b09a8ef3c6cc3b";
export const url=new URL("../icons/pin_drop-fill.svg?v=acfa8f6a532141278294d498426ebea7c52788c2d1fef6df8987cd952be6b9b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
