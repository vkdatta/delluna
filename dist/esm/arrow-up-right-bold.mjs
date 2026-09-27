export const name="arrow-up-right-bold";
export const id="dl_fd6411090d7f4be58764";
export const url=new URL("../icons/arrow-up-right-bold.svg?v=d80cf861a69f96d8343c4ca5d86d85de6340cacce0185df0c523786111b392a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
