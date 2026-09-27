export const name="hourglass-simple-medium";
export const id="dl_48ac093d32564530b0d3";
export const url=new URL("../icons/hourglass-simple-medium.svg?v=1fa98cd24fb57f7cf6357359d3b7efe1407a418f3516d7dd7eba74b3ae3766a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
