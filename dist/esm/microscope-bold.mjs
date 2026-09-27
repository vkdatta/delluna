export const name="microscope-bold";
export const id="dl_a914e78a538c45b4a0d8";
export const url=new URL("../icons/microscope-bold.svg?v=82b2c69ac2fcf6f1fd426e0b3ec1d0c93ac33f420b15c21e89b8d60252fd42ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
