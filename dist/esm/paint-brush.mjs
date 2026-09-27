export const name="paint-brush";
export const id="dl_6b4c978c35184018a6a3";
export const url=new URL("../icons/paint-brush.svg?v=b9abffad533dea5210b394c81d7388aa99ba305dbc1b6f2a2c0280edd0e0ac23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
