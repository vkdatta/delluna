export const name="tv_with_assistant";
export const id="dl_fbcea0981fc48adfd354";
export const url=new URL("../icons/tv_with_assistant.svg?v=be8485491309557f28e536da0e930194dbcb731f05ed649266ef7a4b4df6960e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
