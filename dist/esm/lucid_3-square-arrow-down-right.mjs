export const name="lucid_3-square-arrow-down-right";
export const id="dl_1881bd5b3b16462795cc";
export const url=new URL("../icons/lucid_3-square-arrow-down-right.svg?v=abbbb377fe5ab1464bafe75a2ba1dd6e419afaa5db08251e6cd13ab65a0f5bf9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
