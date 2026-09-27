export const name="plugs-connected-bold";
export const id="dl_e89ea443828946c6b2d7";
export const url=new URL("../icons/plugs-connected-bold.svg?v=e16a36a41032ec0b860a3fb8812d61bea2be6459063b81595672a3e2bb6136d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
