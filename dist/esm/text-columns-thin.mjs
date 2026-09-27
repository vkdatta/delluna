export const name="text-columns-thin";
export const id="dl_1e389b5fb861e8515f53";
export const url=new URL("../icons/text-columns-thin.svg?v=7542f5decf33fd0ca5b8949d45ef5dc07a12a5356bbac6b327cef216bc5d0e5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
