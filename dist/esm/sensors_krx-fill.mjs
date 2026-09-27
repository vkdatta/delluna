export const name="sensors_krx-fill";
export const id="dl_356d1f869faa2f3e5ec6";
export const url=new URL("../icons/sensors_krx-fill.svg?v=ef638169b7667a7f32e2586aece92ce75cbfea24e59710bf8c1a056784ecc7a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
