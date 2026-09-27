export const name="bolt-fill";
export const id="dl_13be6c264572e97e8290";
export const url=new URL("../icons/bolt-fill.svg?v=b8e5ae6eeb8bfa862940703f31b5080788d87aad4c5f3e7eca267432fe58c046",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
