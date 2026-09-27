export const name="sliders-horizontal-thin";
export const id="dl_94441af40f360094eb91";
export const url=new URL("../icons/sliders-horizontal-thin.svg?v=83d4768943ddb7b2c29e8d4011f4d614ea5e0e7d59c96228ec834a4cd148c8d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
