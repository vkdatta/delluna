export const name="lucid_2-folder-code";
export const id="dl_5c3964d479e44153b3b0";
export const url=new URL("../icons/lucid_2-folder-code.svg?v=4b4bdfc5222ef89314d867f30fc979a96d2095cc8e4faba02a4521f6e4499ed5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
