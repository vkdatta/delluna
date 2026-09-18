export const name="step_out-fill";
export const id="dl_f49b24b5996b41d5b812";
export const url=new URL("../icons/step_out-fill.svg?v=5595d25ec186003e8dcae2a1b4aab5417c7aac00fc6d0ff71f3e6b6b56da7e3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
