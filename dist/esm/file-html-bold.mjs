export const name="file-html-bold";
export const id="dl_41b4807db36143f2a6a6";
export const url=new URL("../icons/file-html-bold.svg?v=9c9ca460ed2200809b6e9b09899e97d02244353da5ed55daeda34cf67cb966af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
