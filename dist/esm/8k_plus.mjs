export const name="8k_plus";
export const id="dl_4158c00d14edc44192de";
export const url=new URL("../icons/8k_plus.svg?v=4e505dbc3440f51061cd8c8aafb69e565b3719cc04e72e055ac7dd971c120add",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
