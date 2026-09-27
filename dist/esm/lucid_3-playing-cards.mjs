export const name="lucid_3-playing-cards";
export const id="dl_5efcaf8fb53e4b49ac85";
export const url=new URL("../icons/lucid_3-playing-cards.svg?v=d2438dd8420b0d78286cce73a2c8e748bd064431e02c9975c06a5d3c40f3e31b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
