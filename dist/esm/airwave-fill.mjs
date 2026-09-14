export const name="airwave-fill";
export const id="dl_8107657f4a354e47a93f";
export const url=new URL("../icons/A/airwave-fill.svg?v=c5f553c41e59916c7c97d72665fd2e11e4bb500dc1dd5bc60cfb8dd93553f1e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
