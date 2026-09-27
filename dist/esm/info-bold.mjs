export const name="info-bold";
export const id="dl_5ee9aa97abfa4514aa59";
export const url=new URL("../icons/info-bold.svg?v=a4b67361b5af70fb1b6472a0f5f8628f6ec191ae245124545240bc9b789bb4da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
