export const name="tools_phillips";
export const id="dl_0b1b70f83e7af8d7b1c5";
export const url=new URL("../icons/tools_phillips.svg?v=2fb8c8c82a93ad2bbacb7144fb0f49ada4397f0f0c839286681a88185a859697",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
