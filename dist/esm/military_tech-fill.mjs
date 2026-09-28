export const name="military_tech-fill";
export const id="dl_fd1aceee2df1745f4c05";
export const url=new URL("../icons/military_tech-fill.svg?v=172fb61e73fc6fdb72b45b3be374f6624681d70ff07b967143c7f93559a7e067",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
