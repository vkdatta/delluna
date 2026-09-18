export const name="rest_area-fill";
export const id="dl_40577e6678ef49bc9be3";
export const url=new URL("../icons/rest_area-fill.svg?v=16e7bd368ba7c98f0dc154267f8bab47fd3e1cf0c4d1ae3452db546d7e23fbd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
