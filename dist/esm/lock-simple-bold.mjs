export const name="lock-simple-bold";
export const id="dl_095dfb0f989f4e33a8fe";
export const url=new URL("../icons/lock-simple-bold.svg?v=a359303b1a1f683a59e40396dbf9a6c1aaa68298ba840684045faf5f9854fa21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
