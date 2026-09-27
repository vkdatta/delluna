export const name="lucid_2-grid-2x2";
export const id="dl_71da725e64a745be92b3";
export const url=new URL("../icons/lucid_2-grid-2x2.svg?v=c6be6bd34518d2c6e7923e09f75d65c89a93e718fc5a247170ff74bdc2ec5e49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
