export const name="file-x-thin";
export const id="dl_5aa122091b114a75bb52";
export const url=new URL("../icons/file-x-thin.svg?v=0c34d35e1bebd82a9aba999d93354069bb81b5da7f40450c6c168171016e736e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
