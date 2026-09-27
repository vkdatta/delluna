export const name="ripples-fill";
export const id="dl_c009576d34fe151b50b2";
export const url=new URL("../icons/ripples-fill.svg?v=69ca4d6d0cd4668d2f5e3b24919b76152113f482d2cbe3de122bef710c549e66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
