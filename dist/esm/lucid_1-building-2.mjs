export const name="lucid_1-building-2";
export const id="dl_cd5854a3a5e84f49b45c";
export const url=new URL("../icons/lucid_1-building-2.svg?v=9e9a11fb91cfb2b1b226828e208d584ae71945c90a056781666454b58382baf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
