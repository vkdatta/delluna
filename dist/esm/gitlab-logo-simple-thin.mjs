export const name="gitlab-logo-simple-thin";
export const id="dl_c36abaf4757644d1b8da";
export const url=new URL("../icons/gitlab-logo-simple-thin.svg?v=ca66a737f136c1a9e8de081f50cee3ea83dec9b9da653bcdd993fac1794456c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
