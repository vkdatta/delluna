export const name="google-drive-logo-light";
export const id="dl_c6fa22e4f1f949f78db6";
export const url=new URL("../icons/google-drive-logo-light.svg?v=0ebfe8676b31f2c5d0594a968a3f7a6747f359b9e6d7dad5a179c2de06189403",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
