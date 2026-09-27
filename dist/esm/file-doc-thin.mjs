export const name="file-doc-thin";
export const id="dl_64ffbf4e7c1b42bebae7";
export const url=new URL("../icons/file-doc-thin.svg?v=dc1e9f4fd48976d1e1c4576ca7af27021c4a6393920996a70f43f306a52d787f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
