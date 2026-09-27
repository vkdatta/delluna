export const name="egg_alt";
export const id="dl_7755e5303ed4e76e608f";
export const url=new URL("../icons/egg_alt.svg?v=2fbfcfd2daecbdf75c00b3012f0fce1dd83f5735020fc19d55f3be4daa03b2f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
