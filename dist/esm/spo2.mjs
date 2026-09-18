export const name="spo2";
export const id="dl_d03533eb6ffe4343bdcb";
export const url=new URL("../icons/S/spo2.svg?v=8b510af1749d0e5045846fd2f45af80c2157ffad13929a199458ad41855ea41f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
