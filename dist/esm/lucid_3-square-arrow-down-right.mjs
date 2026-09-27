export const name="lucid_3-square-arrow-down-right";
export const id="dl_1881bd5b3b16462795cc";
export const url=new URL("../icons/lucid_3-square-arrow-down-right.svg?v=7a55ebe9623714e7e994b6207443b753eef9bacde3716c04924c84be723aa3b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
