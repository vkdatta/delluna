export const name="lock-open-bold";
export const id="dl_16e9f63487bc4a099307";
export const url=new URL("../icons/lock-open-bold.svg?v=b9d706fb1a60f4d2e48f5b69586b4a734469b4c528a4e3466770554fca891a04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
