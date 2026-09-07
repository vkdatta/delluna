export const name="yin-yang-bold";
export const id="dl_ab308af9d76842b6a671";
export const url=new URL("../icons/Y/yin-yang-bold.svg?v=3af9a964eca57acc7f1a4932ad8a15e6fdd355931893bafb76ee73320e0a27dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
