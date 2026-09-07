export const name="user-circle-gear-light";
export const id="dl_e214687d98d34b06a03d";
export const url=new URL("../icons/U/user-circle-gear-light.svg?v=982fb7f027bc6c92336a4180d4ad5314a4e8fc94988bcaeb04cb763d07439564",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
