export const name="conversion_path";
export const id="dl_190bb1a05dbba66b6aff";
export const url=new URL("../icons/conversion_path.svg?v=549271d8690881c4c08aa3be78e0eed17f238ef5c841f5d643d4d0b42b30769d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
