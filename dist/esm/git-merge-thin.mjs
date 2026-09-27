export const name="git-merge-thin";
export const id="dl_ab80fe6cd73545118abb";
export const url=new URL("../icons/git-merge-thin.svg?v=b2ba5690574302ec6f1021f07419f87b3964d181014d29915ca86f927472d22c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
