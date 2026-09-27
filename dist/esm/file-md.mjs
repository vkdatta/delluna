export const name="file-md";
export const id="dl_12098c4b11a7444eae55";
export const url=new URL("../icons/file-md.svg?v=d5336a49355fcd7a5a594615556322ceafbc82d141ec52b5f91bc012bd8acd0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
