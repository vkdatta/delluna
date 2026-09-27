export const name="trademark-registered-bold";
export const id="dl_8a7555ccabdf2ad9c5e2";
export const url=new URL("../icons/trademark-registered-bold.svg?v=e5baf64bc0f9e2fbfeee888440d7a9b58ce54b42c46118b99cfc51a1d8653784",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
