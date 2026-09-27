export const name="sensors";
export const id="dl_a960218083b074321925";
export const url=new URL("../icons/sensors.svg?v=d6b16b5603eca19749caee4e285edf795857bb579be52b13150887bbbeae4c64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
