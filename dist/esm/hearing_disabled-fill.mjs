export const name="hearing_disabled-fill";
export const id="dl_1049c2cc25bcb1c0c04a";
export const url=new URL("../icons/hearing_disabled-fill.svg?v=5d5a186abc6d28bb33f9c7b613f977a59c94328a141d917794a7dab7d43f1802",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
