export const name="lucid_3-notebook-pen";
export const id="dl_512870a037314eb8b05e";
export const url=new URL("../icons/lucid_3-notebook-pen.svg?v=bef62fd42392a26ff58bb5dc1c06eec1238f3bd2d877c73da149c7007d9a7ff4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
