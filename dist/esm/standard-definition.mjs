export const name="standard-definition";
export const id="dl_9f1497c28e8e1dd8f750";
export const url=new URL("../icons/standard-definition.svg?v=535aa59e50eac9a40edf27548b08756fcf76fc0749f891726e2b6f3d2fbe196c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
