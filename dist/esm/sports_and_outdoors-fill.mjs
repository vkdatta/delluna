export const name="sports_and_outdoors-fill";
export const id="dl_7044e7ba25994765acdb";
export const url=new URL("../icons/sports_and_outdoors-fill.svg?v=fe034612ac02f147203622432d91a95e2557ff958828e0a53110a9025a36a52c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
