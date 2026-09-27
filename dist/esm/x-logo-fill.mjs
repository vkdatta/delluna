export const name="x-logo-fill";
export const id="dl_3848946ff2caa92b99d3";
export const url=new URL("../icons/x-logo-fill.svg?v=cd771bdcbc89d7878aad51e76f4222cc283b688f1f5593522d6cae3825025a60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
