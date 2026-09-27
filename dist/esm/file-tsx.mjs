export const name="file-tsx";
export const id="dl_3ea0979fcb064a58bce3";
export const url=new URL("../icons/file-tsx.svg?v=c71d5a7547811a49c9dc83b437f3d05c262e4b5efe5e0f69a20ecea0dab503b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
