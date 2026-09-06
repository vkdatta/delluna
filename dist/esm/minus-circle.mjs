export const name="minus-circle";
export const id="dl_b5a5255dbd8c4fadaa08";
export const url=new URL("../icons/minus-circle.svg?v=969de9cfae81e75d377f932733c8d003e1ad7903afe7fee67b8aecccb0c08d4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
