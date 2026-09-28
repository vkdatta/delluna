export const name="text-aa-fill";
export const id="dl_8bb699614052d9842952";
export const url=new URL("../icons/text-aa-fill.svg?v=f84d9f0c1411ea77f499bc571e0926ba60f10f6a55d7350fa8110727238d9531",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
