export const name="bicycle";
export const id="dl_ab2c0cfa484345ff96f4";
export const url=new URL("../icons/bicycle.svg?v=8a0a75df7fd5152b318b8547a2dfbb3ada0b0738ac41d6f505494dbc1d03dca7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
