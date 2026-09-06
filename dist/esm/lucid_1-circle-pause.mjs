export const name="lucid_1-circle-pause";
export const id="dl_af6e347f7feb465e8ad8";
export const url=new URL("../icons/lucid_1-circle-pause.svg?v=502fb5f1c1653aefcc26795b87854b432d80f042cde1841b6fe0ad64a4c7f214",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
