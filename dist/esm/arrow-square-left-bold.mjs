export const name="arrow-square-left-bold";
export const id="dl_d6b3b0b6338f40d982d2";
export const url=new URL("../icons/arrow-square-left-bold.svg?v=4ad677b9ebfb24a639f8d70c4aa7e588ac9081463330ca673b16063cf88c0cab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
