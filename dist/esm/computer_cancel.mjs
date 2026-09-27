export const name="computer_cancel";
export const id="dl_3c81ddf32bad80d8c062";
export const url=new URL("../icons/computer_cancel.svg?v=fa3b3c9f910b038cecc50440f6a9d537fa0f1bcb304729eedcd0753df4240c22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
