export const name="orange-slice-bold";
export const id="dl_8297225d063e42ddaf04";
export const url=new URL("../icons/orange-slice-bold.svg?v=d2537f7bb402e9ff92bf2dc480f42a6acca48bd1e20b61e12fb1f030336efc08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
