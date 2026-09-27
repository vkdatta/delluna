export const name="file_map_stack";
export const id="dl_e4e803cdecf577abb3f5";
export const url=new URL("../icons/file_map_stack.svg?v=5f901197c0a4522cbfad15f8b825aab62c840f1f6d7c2e327a74e9ea14876cd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
