export const name="lucid_3-message-square-plus";
export const id="dl_7553bae8b38140908491";
export const url=new URL("../icons/lucid_3-message-square-plus.svg?v=bfeedad366da650123e059fdf6717ece39652e9faeedd6c12d27df33115596a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
