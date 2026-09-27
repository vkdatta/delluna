export const name="user-square-bold";
export const id="dl_f1ee006cb382b7fe5bc3";
export const url=new URL("../icons/user-square-bold.svg?v=de6d1e9d396c1297b90326588cacf940160a20dbdfc9032c5e14b567572642cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
