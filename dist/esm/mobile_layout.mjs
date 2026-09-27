export const name="mobile_layout";
export const id="dl_ce3797b9a8bb81f80910";
export const url=new URL("../icons/mobile_layout.svg?v=0f5cef8809cb28951b11975a99a1b625baabeade7a00591a583d5fab0c592f33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
