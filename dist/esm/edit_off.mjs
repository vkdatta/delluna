export const name="edit_off";
export const id="dl_86c27b82a3a890c6f810";
export const url=new URL("../icons/edit_off.svg?v=42c6d1d6398cc2dda930c34ccc6ef51f698af31af7b70063eabd2630d1d4e6ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
