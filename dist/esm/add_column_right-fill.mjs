export const name="add_column_right-fill";
export const id="dl_a063d9e51e6d4e8fafcb";
export const url=new URL("../icons/add_column_right-fill.svg?v=fcd34ddae1df22c09c54a2952038e958d0f29da381bfc7d3ed818841ed784f1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
