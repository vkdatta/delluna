export const name="lucid_2-folder-down";
export const id="dl_308e95718abb4d35b0b0";
export const url=new URL("../icons/lucid_2-folder-down.svg?v=6faf3c736afde7089655e6e6436951a07f1d82c066bccc4e645b04dbada6f163",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
