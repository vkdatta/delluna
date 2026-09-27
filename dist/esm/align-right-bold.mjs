export const name="align-right-bold";
export const id="dl_13b322bc236f4c11912a";
export const url=new URL("../icons/align-right-bold.svg?v=7e30c112240e6925c33ca65c4cf593ea4ecb56a8892e93a3a76323c38c8cf111",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
