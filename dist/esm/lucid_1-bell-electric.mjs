export const name="lucid_1-bell-electric";
export const id="dl_a50fe189cbfb4ff890f7";
export const url=new URL("../icons/lucid_1-bell-electric.svg?v=d6a014b68df86171e791d008421e66610e501e52ec1cea275512fec2fcb38f41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
