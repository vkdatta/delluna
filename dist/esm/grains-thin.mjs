export const name="grains-thin";
export const id="dl_9d1cd5141fdc466ca2ec";
export const url=new URL("../icons/grains-thin.svg?v=a1da35e9d5ceadc1d154b4673c7899e05b57d3dc372387dd10ab6684af537443",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
