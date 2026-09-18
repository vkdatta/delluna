export const name="subwoofer-fill";
export const id="dl_e782d659557a4fc6941b";
export const url=new URL("../icons/S/subwoofer-fill.svg?v=4d530fb97d69c6dac1df4019d2cf8bec1d5be73d426ecc4fc3e05cb2b90b062b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
