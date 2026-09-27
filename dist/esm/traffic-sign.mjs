export const name="traffic-sign";
export const id="dl_3602ae7edf07b9829a01";
export const url=new URL("../icons/traffic-sign.svg?v=ddbafe206a5eca827872de79909c4b173ce20aa00bd59397282f892405d784a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
