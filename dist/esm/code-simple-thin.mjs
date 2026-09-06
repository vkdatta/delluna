export const name="code-simple-thin";
export const id="dl_c4412bec14e44e5395bc";
export const url=new URL("../icons/code-simple-thin.svg?v=8a89cb5d25a5894403a95a603235dfe8f3d80ec77cc21b7b6b30574cf75964c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
