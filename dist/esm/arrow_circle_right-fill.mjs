export const name="arrow_circle_right-fill";
export const id="dl_6d22385f2e3c567bd358";
export const url=new URL("../icons/arrow_circle_right-fill.svg?v=0d7b76cfb6c04afac006d617e137419681120d7cc9c92b599a20e5418e70ba36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
