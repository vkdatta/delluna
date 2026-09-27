export const name="boxing-glove-light";
export const id="dl_6ff8d1ec1ee545858953";
export const url=new URL("../icons/boxing-glove-light.svg?v=7d06a93a15c0fcbdb123a23f62be9731a6250b512c31190aaf0c33ef8b818112",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
