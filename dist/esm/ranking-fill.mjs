export const name="ranking-fill";
export const id="dl_46dadd7549204995956a";
export const url=new URL("../icons/ranking-fill.svg?v=91b8d8edd5dced9d32f3c4737cb66ecb04fc39bcc9dac87e77f7e8210090f5f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
