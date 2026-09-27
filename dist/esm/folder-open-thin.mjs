export const name="folder-open-thin";
export const id="dl_d261afbafe394543b305";
export const url=new URL("../icons/folder-open-thin.svg?v=8d6df4ae2ba1b77762ad014c3fc1c70cef221669d0eb1eea258a73a6887b521c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
