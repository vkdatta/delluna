export const name="weight";
export const id="dl_2de7b198099946519105";
export const url=new URL("../icons/weight.svg?v=100841d27bcf31e42284d2c88ce34c17bcd0d056203c4a8e91c33ce1ff1fd969",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
