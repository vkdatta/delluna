export const name="axe-bold";
export const id="dl_1912aecc778c4241bdc4";
export const url=new URL("../icons/axe-bold.svg?v=bb77ab0b9f26ee461189ae58df735695415a3b37d1b67ffde668d45d48abceb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
