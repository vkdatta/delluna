export const name="textbox";
export const id="dl_3f7f5113095d32624728";
export const url=new URL("../icons/textbox.svg?v=cefefa77a9626095cb99d61c3770e33216d166f0c4d66b4395641e4da5f2c14d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
