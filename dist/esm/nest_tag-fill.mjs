export const name="nest_tag-fill";
export const id="dl_7481ef0220daef85d874";
export const url=new URL("../icons/nest_tag-fill.svg?v=e02d1820b1162c31a035c4c527384101e502bb4dd08c0ebfd16338bef9a33385",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
