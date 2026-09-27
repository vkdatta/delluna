export const name="train-regional-thin";
export const id="dl_bb8d2ddcc7554d2c10b1";
export const url=new URL("../icons/train-regional-thin.svg?v=9211487bbf63214beb35cc8fedabd6db8e5bc55321962b211000394d4e8a8042",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
