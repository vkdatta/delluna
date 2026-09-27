export const name="bird-bold";
export const id="dl_112d7974afe445a69fe0";
export const url=new URL("../icons/bird-bold.svg?v=1b5ec036e724454f477b57aa80e994f4e688ef98cbc47abcb7f402210fc6aa8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
