export const name="frame_person_off";
export const id="dl_7a71fc8a604f55694d07";
export const url=new URL("../icons/frame_person_off.svg?v=729bfb5e181ae70d279d5f4bb66924d5f80ffc29da847b81df0993ee232c4cab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
