export const name="spoke";
export const id="dl_5cb9545a5b9794b95691";
export const url=new URL("../icons/spoke.svg?v=df2cb66d985923cf2bd0ded82d12491398acc9d5466326b6da7b67fc6354436b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
