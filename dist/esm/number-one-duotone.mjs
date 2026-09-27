export const name="number-one-duotone";
export const id="dl_6f68d869123d4eb98ad9";
export const url=new URL("../icons/number-one-duotone.svg?v=714aeb9d39631fb9d44f1b9e8114217dd789bbbbcf3792e44d8e8469de550af7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
