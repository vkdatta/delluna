export const name="file-ppt-bold";
export const id="dl_4cb38116fa0046e397e5";
export const url=new URL("../icons/file-ppt-bold.svg?v=6f14abdc59229c8f97d628b89f36449e754789023c91737220e804607032aa95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
