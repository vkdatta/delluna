export const name="opacity-fill";
export const id="dl_609b2b16adb28c9bec7f";
export const url=new URL("../icons/opacity-fill.svg?v=fd8acf16fc4da1b453cf02ba0b90b43014b479e1d4261ec1496c0381d40f4d9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
