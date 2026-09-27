export const name="stadia_controller";
export const id="dl_d8c5caf63207a0d42ec0";
export const url=new URL("../icons/stadia_controller.svg?v=6f16db22126f4527be85e54edda61b4a297dad5842d42323109f08b342f5f8a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
