export const name="device-tablet-camera-thin";
export const id="dl_9f60e352a67543879e6d";
export const url=new URL("../icons/device-tablet-camera-thin.svg?v=a39eb872acf905a985974826b7a1e78db97186a3bb68eafcab26766ded90676b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
