export const name="compass-tool-bold";
export const id="dl_3bc5ac9cb51945c79c52";
export const url=new URL("../icons/compass-tool-bold.svg?v=0e2d22b7848e682d39c35d3af8a44a06a587337d14f86dc6816bf8904b062fb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
