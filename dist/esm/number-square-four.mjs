export const name="number-square-four";
export const id="dl_36c0ad10c1c940fd988e";
export const url=new URL("../icons/number-square-four.svg?v=7fe04430e4495e9a9e15e7c1334184bd3ccaefaa1f0c8a2d20fb9e05f4b2f777",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
