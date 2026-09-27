export const name="align-left-simple-duotone";
export const id="dl_4bfe7996a5ca4c52a09d";
export const url=new URL("../icons/align-left-simple-duotone.svg?v=25495b1856c74dfcf79db0d9b8faabf8328fdcac911e9d3c1e1b4e8d695b9e7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
