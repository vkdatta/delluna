export const name="text-b-duotone";
export const id="dl_7f6bfdf66441fc1c64a6";
export const url=new URL("../icons/text-b-duotone.svg?v=fc9a85dbcae73e86d21b6148360f753b1fe05f1fd60c9fa18111d55fbe9a84d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
