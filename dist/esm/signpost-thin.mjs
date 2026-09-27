export const name="signpost-thin";
export const id="dl_79649f6bef234fd041bc";
export const url=new URL("../icons/signpost-thin.svg?v=9240b7adbc93b9f7a180c7df354b3cb8e229471755ec3def4c5d7b67b65bcbe5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
