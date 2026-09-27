export const name="lucid_1-circle-chevron-left";
export const id="dl_7b84c9ee66c342c5a257";
export const url=new URL("../icons/lucid_1-circle-chevron-left.svg?v=d2bfadbdcc0efce7329ccfaf901e397ac893954f22416b6199873c4671c22aaa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
