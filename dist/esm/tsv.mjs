export const name="tsv";
export const id="dl_8d2b54aa71368f85d164";
export const url=new URL("../icons/tsv.svg?v=276ef008b248441c4eed3ae30ab1aa4ab370acb84f53f9725242f05bcb925595",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
