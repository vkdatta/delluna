export const name="folder_off-fill";
export const id="dl_35caf265fff35c369732";
export const url=new URL("../icons/folder_off-fill.svg?v=e3fa5f3f01d6fa8e370cd0274f5105aab5cb6d8e64ce681ee4662227d8ab34b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
