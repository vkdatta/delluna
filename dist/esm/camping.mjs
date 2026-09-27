export const name="camping";
export const id="dl_2bf12a10235f78b16c5d";
export const url=new URL("../icons/camping.svg?v=f4d700b1c903954b06a107def154e6cf35ca91d7511f73efc3a0d222975538d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
