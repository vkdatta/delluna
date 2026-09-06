export const name="eye-closed-duotone";
export const id="dl_da3c11bfdea244ba9684";
export const url=new URL("../icons/eye-closed-duotone.svg?v=0ffc23a393fe841e7511352443d2935bf8d342f836561271f88ddb3f59e47950",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
