export const name="hard-drives";
export const id="dl_94cad8d9758e4eb4a1e8";
export const url=new URL("../icons/hard-drives.svg?v=b5494f4e957332db26abd60bbe1a9267c07c4097a7c4bb3dd737f7c8cdbfc79e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
