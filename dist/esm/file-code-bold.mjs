export const name="file-code-bold";
export const id="dl_b6e699df6a094c8f953c";
export const url=new URL("../icons/file-code-bold.svg?v=8732a29c3c8880730e7434d099b15fab429ac40439e0486cca52ae4bea2cda69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
