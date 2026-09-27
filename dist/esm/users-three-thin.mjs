export const name="users-three-thin";
export const id="dl_bd82cfa52aab2e814d92";
export const url=new URL("../icons/users-three-thin.svg?v=8942b8688794d6c0f94dc1ecfdea406f4b3d5aa05c5cec18914d7f39f5f8de00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
