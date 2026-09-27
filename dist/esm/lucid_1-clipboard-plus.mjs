export const name="lucid_1-clipboard-plus";
export const id="dl_499c8a6441344eddb6bd";
export const url=new URL("../icons/lucid_1-clipboard-plus.svg?v=6f7a6bfa21104888afc4ee97d9769db05e2ef61db3d9d58ecc93d741c35d537c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
