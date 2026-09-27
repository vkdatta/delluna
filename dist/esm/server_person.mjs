export const name="server_person";
export const id="dl_5933e526c42dde6039e8";
export const url=new URL("../icons/server_person.svg?v=a2d13f8e405ea52ae15ce2306aab77c135bfe1ce1c3bdd2240fb5a6ca77e6adf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
