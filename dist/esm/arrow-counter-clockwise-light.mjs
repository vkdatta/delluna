export const name="arrow-counter-clockwise-light";
export const id="dl_2563cc043f7c48d7b213";
export const url=new URL("../icons/arrow-counter-clockwise-light.svg?v=7cea81b7adb1b59725797820ef3386665a7248d6f7250a49005c3942a9c7016c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
