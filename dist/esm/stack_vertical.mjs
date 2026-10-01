export const name="stack_vertical";
export const id="dl_27cb5b04dccf43fcbfd7";
export const url=new URL("../icons/stack_vertical.svg?v=7fd94404ed77403d1ea1ee8557ea4334ce0c8d622bbe4aae8923023391c21740",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
