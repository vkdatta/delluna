export const name="folder-simple-lock-thin";
export const id="dl_a2daf7beb08144b48c6a";
export const url=new URL("../icons/folder-simple-lock-thin.svg?v=68c113f19335042593914b297436397cefc6aab3089106337040467dc604ed19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
