export const name="whole-word";
export const id="dl_a400e9d373b64fb2988f";
export const url=new URL("../icons/whole-word.svg?v=23237da279dd547b2f281009feb9a89aa1b7688a86c1c200160ad175b37bb121",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
