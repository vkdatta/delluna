export const name="trademark-fill";
export const id="dl_d348812f075c4f9d58d6";
export const url=new URL("../icons/trademark-fill.svg?v=a3b64ae74ff322b67c5f749d7e52d8550305565fe5d97da8a7c358683d5b92f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
