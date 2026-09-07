export const name="battery-full-bold";
export const id="dl_736c9a16211e48e187d9";
export const url=new URL("../icons/battery-full-bold.svg?v=672f98ace855d44f5cca5849ba008bdb5d175af41173834e0cdff302ed350a52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
