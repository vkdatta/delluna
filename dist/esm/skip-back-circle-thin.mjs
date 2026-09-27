export const name="skip-back-circle-thin";
export const id="dl_73598a8a827a5d28288a";
export const url=new URL("../icons/skip-back-circle-thin.svg?v=feaf7922e5ac85b682b2460d2cc605c030a49e6dda3397a4c4d1b307ce8c69b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
