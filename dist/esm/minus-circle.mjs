export const name="minus-circle";
export const id="dl_b5a5255dbd8c4fadaa08";
export const url=new URL("../icons/minus-circle.svg?v=46c94eeb30a725fc0662d30b530565b82c19a18864bb26bf542f87bc2beb6284",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
