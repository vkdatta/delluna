export const name="lucid_2-disc-2";
export const id="dl_2aaa1dec29b242409094";
export const url=new URL("../icons/lucid_2-disc-2.svg?v=099d5983929b1895549cf39cab4c5db6901dc1c8a149ae57f7c40532a228ca2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
