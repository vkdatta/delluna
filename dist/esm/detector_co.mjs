export const name="detector_co";
export const id="dl_9d572584272e0c049abd";
export const url=new URL("../icons/detector_co.svg?v=5cfb550605b325f4b4411001cde942fcb21662c079ee4035114ed6aef8740b06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
