export const name="lucid_2-file-volume";
export const id="dl_9d39fa3d4cbf40e784dc";
export const url=new URL("../icons/lucid_2-file-volume.svg?v=e90baa79e8f68632f5ccbf55a232df1b2b6da647b2b9c608fef306d98b340027",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
