export const name="scan";
export const id="dl_643a4c93a2baba6d951e";
export const url=new URL("../icons/scan.svg?v=91befa50d84602ee64dad1a9936efcb03a32a5db5c07379faacc2a9aa843ab66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
