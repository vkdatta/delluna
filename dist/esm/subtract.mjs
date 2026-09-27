export const name="subtract";
export const id="dl_e59286e27b179b361727";
export const url=new URL("../icons/subtract.svg?v=0e02ec187046f770e1ac14a683a7927242f3696df453e37c87cb531a84cc7ebf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
