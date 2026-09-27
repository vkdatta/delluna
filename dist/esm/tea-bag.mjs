export const name="tea-bag";
export const id="dl_51a9a56547ec7c9c01d4";
export const url=new URL("../icons/tea-bag.svg?v=7d2cb886a195db4e5b617b5fc2a347c5a7c8da2cf964b3511316b114278e2ecd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
