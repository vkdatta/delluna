export const name="lucid_2-hard-drive-upload";
export const id="dl_0b5a2ab91426412990e9";
export const url=new URL("../icons/lucid_2-hard-drive-upload.svg?v=f80f7661a9e2bf0196d3621c8bbb983492720562c05171ed6161beae2c9aefa4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
