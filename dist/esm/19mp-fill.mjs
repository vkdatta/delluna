export const name="19mp-fill";
export const id="dl_8e9550af1a7e87cf614f";
export const url=new URL("../icons/19mp-fill.svg?v=c719fd2bd147ca295fdb9f14038dcc24b5610d908b9dfecedb89a2e1a6ec6be7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
