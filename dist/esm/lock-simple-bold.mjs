export const name="lock-simple-bold";
export const id="dl_095dfb0f989f4e33a8fe";
export const url=new URL("../icons/lock-simple-bold.svg?v=656f6bff423aa14e5d58c60f25bec0ffd853c3fbec9514e36576fa48b545370c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
