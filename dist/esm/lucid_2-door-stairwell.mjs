export const name="lucid_2-door-stairwell";
export const id="dl_757ee530cc324a02a8c6";
export const url=new URL("../icons/lucid_2-door-stairwell.svg?v=9373ba57c7448ebd94b803863d589e1965badeac2dafeb99f0ae3f0a4ce507f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
