export const name="square-user-round";
export const id="dl_12b640bd6bcc41b693b2";
export const url=new URL("../icons/square-user-round.svg?v=5df640da0d6957416e0eb967dc0f52de32146ec68306f6d8c53805adc27ce71a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
