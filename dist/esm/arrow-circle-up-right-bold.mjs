export const name="arrow-circle-up-right-bold";
export const id="dl_8ed03b5561424b51a73a";
export const url=new URL("../icons/arrow-circle-up-right-bold.svg?v=faf41f299bd51afe6fbbed413b33e7530ed3bf0456d564b304216b87b1fbf39a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
