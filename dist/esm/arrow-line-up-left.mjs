export const name="arrow-line-up-left";
export const id="dl_2a88e78fdb364a12bdcd";
export const url=new URL("../icons/arrow-line-up-left.svg?v=529391fbf137d2ae216b5b865cbfde68bbb2ed866d475bf3009bf9ac3f949478",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
