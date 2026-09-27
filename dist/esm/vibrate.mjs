export const name="vibrate";
export const id="dl_81564dd97f155799f969";
export const url=new URL("../icons/vibrate.svg?v=75924eb11cff3e92d54e81af9be43ee41ecfe6303bdb2365a7dabb36ebdb5e88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
