export const name="flip-vertical-light";
export const id="dl_df7a9e1514d14a00bd6e";
export const url=new URL("../icons/flip-vertical-light.svg?v=651721d441f7ac276bf9e540f417feace198f82429f22c979c325c0a25340b58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
