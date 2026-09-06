export const name="buildings-bold";
export const id="dl_1fd448e7477e432099b0";
export const url=new URL("../icons/buildings-bold.svg?v=d4e2316969136c81f53c38669b53b3d981f2e4dce1dd768ecdeb62ddd291e7b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
