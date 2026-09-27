export const name="folders-bold";
export const id="dl_18e10df8a0554d849ce1";
export const url=new URL("../icons/folders-bold.svg?v=0e9b4230cbf2f86c8b5279cb6f5aaea298c3cdff36376a6b31da6bf85715009d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
