export const name="numpad-fill";
export const id="dl_0c7e0cf5352b40aa8690";
export const url=new URL("../icons/numpad-fill.svg?v=d9951d2417481741c5687843c4c07eae706323559adb19e4bb882b871745a480",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
