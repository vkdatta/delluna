export const name="arrows-clockwise-duotone";
export const id="dl_724c85248f3349a1b2ad";
export const url=new URL("../icons/arrows-clockwise-duotone.svg?v=1dca97ccb5e86df52cec1a589bb8a83ed793826c249bfd676578767d47c9d847",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
