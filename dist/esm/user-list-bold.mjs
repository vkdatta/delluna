export const name="user-list-bold";
export const id="dl_f493a3cbaf520039849d";
export const url=new URL("../icons/user-list-bold.svg?v=12034c5fcbe674a215d7e6c7bba80f5cc96a5d61ef2304db85c2e4b211a07854",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
