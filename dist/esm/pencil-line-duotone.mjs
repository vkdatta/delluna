export const name="pencil-line-duotone";
export const id="dl_49beee9282854832a81a";
export const url=new URL("../icons/pencil-line-duotone.svg?v=f3178c108d30e50325eb8ea05f8f8e84127678b136bde75a15d9b2513fa6bd5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
