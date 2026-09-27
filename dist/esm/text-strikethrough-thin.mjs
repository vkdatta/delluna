export const name="text-strikethrough-thin";
export const id="dl_3ec468adebd27415de46";
export const url=new URL("../icons/text-strikethrough-thin.svg?v=640ea4901d6c082cdc660649226c8c4f381333f77d979f92dfb72ed4ae66531f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
