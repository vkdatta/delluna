export const name="text-b-duotone";
export const id="dl_3a47785f015a47fdb4bf";
export const url=new URL("../icons/T/text-b-duotone.svg?v=fc9a85dbcae73e86d21b6148360f753b1fe05f1fd60c9fa18111d55fbe9a84d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
