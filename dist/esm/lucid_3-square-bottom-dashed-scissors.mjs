export const name="lucid_3-square-bottom-dashed-scissors";
export const id="dl_4d58fcc0faea4eddb4f7";
export const url=new URL("../icons/lucid_3-square-bottom-dashed-scissors.svg?v=2ea2f0ca2e633df7b9dda2d91bb41b6038037ae316d55ed505041ae41c1dc9ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
