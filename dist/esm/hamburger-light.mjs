export const name="hamburger-light";
export const id="dl_78b8513550574fa69765";
export const url=new URL("../icons/hamburger-light.svg?v=ef38f922fa9945c180adec577ffe3ca12dadcb064df558553c387b02e21e88d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
