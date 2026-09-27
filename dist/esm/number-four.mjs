export const name="number-four";
export const id="dl_8cab4af82ca4480fbff8";
export const url=new URL("../icons/number-four.svg?v=fd6b32b05904a1ba0d2fecbd38548e54b61ab7e37e93efa99966edf259f74536",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
