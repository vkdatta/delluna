export const name="bowl-steam";
export const id="dl_e9659e4f5be04821a5de";
export const url=new URL("../icons/bowl-steam.svg?v=36747ae02993fb6da7143ed897b85cb7c3e1e6868fd5e97516972d1f7952bf23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
