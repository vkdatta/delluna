export const name="check-fat";
export const id="dl_1f05f09742aa4b6aa9ea";
export const url=new URL("../icons/check-fat.svg?v=dc8e7d6143503222792d43eaae3100032ab7490ae81ef25da676a56a1b342617",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
