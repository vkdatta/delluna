export const name="add_row_above";
export const id="dl_4fcde711fc659539d4a6";
export const url=new URL("../icons/add_row_above.svg?v=1031ff00bfb0fdaa6315906671c140a4df9e1d14f7cfb3cab20daf784fd1de0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
