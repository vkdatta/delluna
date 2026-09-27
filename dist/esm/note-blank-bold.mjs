export const name="note-blank-bold";
export const id="dl_0fc04c4f50dd4593bcf4";
export const url=new URL("../icons/note-blank-bold.svg?v=4eff5f7ec10351eb6fdc13d664b0251a7287c5d0e6c6cfe8c6b6c5f82d8cdf94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
