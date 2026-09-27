export const name="horse-light";
export const id="dl_7c6b3a3598aa4e26bc02";
export const url=new URL("../icons/horse-light.svg?v=5eaba4a762f624af8a1148553eb49a6acfc545d2a276ade4bbc7a33fa6743db7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
