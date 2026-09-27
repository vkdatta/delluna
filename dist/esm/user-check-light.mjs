export const name="user-check-light";
export const id="dl_22ecff5a3f1f53352f65";
export const url=new URL("../icons/user-check-light.svg?v=b32c3b9d35970a2526889a55033a0dae9b57630e241156fb7f952ed3a63be6ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
