export const name="text-columns-thin";
export const id="dl_5bc8b11ff4dd44258f5e";
export const url=new URL("../icons/T/text-columns-thin.svg?v=7542f5decf33fd0ca5b8949d45ef5dc07a12a5356bbac6b327cef216bc5d0e5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
