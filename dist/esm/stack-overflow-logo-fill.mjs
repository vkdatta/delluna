export const name="stack-overflow-logo-fill";
export const id="dl_639ba726cd3bb4f4d364";
export const url=new URL("../icons/stack-overflow-logo-fill.svg?v=54e3272377a58e370b9e93ebb6b0f67b8c28b0a94a255375f579677ff180ee1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
