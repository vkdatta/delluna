export const name="calendar-blank-bold";
export const id="dl_2af1bd0e4a6f4609acfb";
export const url=new URL("../icons/calendar-blank-bold.svg?v=b377284027b2e5149e3c5a521e21a3667bce35e8b3e26c7de559d0f156b17ec5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
