export const name="person_pin-fill";
export const id="dl_10f907fa090e4fe5b169";
export const url=new URL("../icons/person_pin-fill.svg?v=ab7acae4649f06e3a2a21a250edb2365627b0200665a2a6062e82bacb02ef7d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
