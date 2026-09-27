export const name="greater-than-or-equal";
export const id="dl_1747d14e731d4919b1a6";
export const url=new URL("../icons/greater-than-or-equal.svg?v=abff31cca2a39eb31d5cc0c4b8dd0d9f4279d7d3fc0f72b9bae30c3bc9f3c989",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
