export const name="number-circle-six-duotone";
export const id="dl_3db34140b7174ed7ba65";
export const url=new URL("../icons/number-circle-six-duotone.svg?v=5a560c85d9ed560bd3d3a1b5b5b43cc42e53d9d92bf2f4e5604c59f73a3bec79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
