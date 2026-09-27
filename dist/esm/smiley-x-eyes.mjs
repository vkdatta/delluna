export const name="smiley-x-eyes";
export const id="dl_82c66ad8c85e5eea4f4c";
export const url=new URL("../icons/smiley-x-eyes.svg?v=2e18f2ae353f2ce17e496a24893362f94af4a61f6a6ece69a666b72cc756b187",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
