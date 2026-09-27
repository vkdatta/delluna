export const name="mobile_camera";
export const id="dl_111d30b98befa40d53da";
export const url=new URL("../icons/mobile_camera.svg?v=976467c7fca571be82ca76a17c934f9e4cb75d26f79d33726bbe9161c5dc8331",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
