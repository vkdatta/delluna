export const name="lucid_3-panda";
export const id="dl_2a9d628d245b4e41ab91";
export const url=new URL("../icons/lucid_3-panda.svg?v=4b840ede363482048e195040b45a6c9f6e8f5599ca6afa84c420bb978b9767e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
