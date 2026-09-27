export const name="nuclear-plant-light";
export const id="dl_4170b3336ed44ad5bbc8";
export const url=new URL("../icons/nuclear-plant-light.svg?v=fbe7b8ecc5da30c287eb8f4be46766bb889e3aa4850b457e289a151237b2911c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
