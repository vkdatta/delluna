export const name="airplane-tilt-bold";
export const id="dl_7e498ec8b828476891a9";
export const url=new URL("../icons/airplane-tilt-bold.svg?v=da42230b243c5ee6cb61e73a06754adc3fabc7a0c777faa0d1ed8fca185045b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
