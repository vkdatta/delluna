export const name="demography";
export const id="dl_8202d35f2c166c31cff0";
export const url=new URL("../icons/demography.svg?v=897ad879fb7d104dfa7e755e8a72a1a01e479533fcf4215bbd683ddda6572c30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
