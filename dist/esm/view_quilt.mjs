export const name="view_quilt";
export const id="dl_94efec03f6c84107b534";
export const url=new URL("../icons/view_quilt.svg?v=775a69247d29ceb016b2d95aff285dab27ffec59db9733c4cd363be612d26ee9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
