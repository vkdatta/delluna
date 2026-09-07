export const name="number-circle-three-light";
export const id="dl_571423a324f84e81bb2b";
export const url=new URL("../icons/number-circle-three-light.svg?v=73c449b0296097524bdf4f30297f477dbe8c52518ca07848f2cb58db06085443",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
