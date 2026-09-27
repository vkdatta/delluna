export const name="number-circle-five-duotone";
export const id="dl_7e4b9055b0ca4e72b604";
export const url=new URL("../icons/number-circle-five-duotone.svg?v=3254a0ddfbed341981a05c08edf7897fd54cbcc4038e3f02cb8c1f405c7bf610",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
