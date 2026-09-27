export const name="file-jpg-bold";
export const id="dl_bb10b2f3eea94d73ae1b";
export const url=new URL("../icons/file-jpg-bold.svg?v=d4e9e0a44b4bb17dd67138bba4304c7a4211b815b9ffe6e1ad547a535741e5df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
