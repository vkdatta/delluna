export const name="dice-four";
export const id="dl_5506344accf64968b505";
export const url=new URL("../icons/dice-four.svg?v=9539e2abfa9ad089edcacb7156a00234d6e24fef14b00d9bc35556f883a4b1bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
