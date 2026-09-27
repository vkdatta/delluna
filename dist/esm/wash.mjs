export const name="wash";
export const id="dl_484dddefbd1128fe5a59";
export const url=new URL("../icons/wash.svg?v=847dffdccf37853a7a97c721d2accbe63c5453bc16bbfa7241bab06fef09ace8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
