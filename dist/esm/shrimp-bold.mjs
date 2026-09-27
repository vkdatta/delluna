export const name="shrimp-bold";
export const id="dl_1ad9c72cea6d3d56123f";
export const url=new URL("../icons/shrimp-bold.svg?v=7605d45a365629710358ce98f0b17a6f92c6ab6d2753c83946419ddd5732a025",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
