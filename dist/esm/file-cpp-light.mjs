export const name="file-cpp-light";
export const id="dl_a93f57c94b3e4e98991c";
export const url=new URL("../icons/file-cpp-light.svg?v=46e1acad05ebe98bf010bc050378bfc301af95d22979081b505f4e815e657532",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
