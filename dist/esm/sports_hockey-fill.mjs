export const name="sports_hockey-fill";
export const id="dl_ec9111fe7bdc461a8c1d";
export const url=new URL("../icons/sports_hockey-fill.svg?v=71f67f6996f5ef5c6de807576e90d0ed8ea47f6f86a4eaca785cbefdb6a8e829",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
