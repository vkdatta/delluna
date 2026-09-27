export const name="speaker_group-fill";
export const id="dl_1fd25cece33052e400cd";
export const url=new URL("../icons/speaker_group-fill.svg?v=f803674baed04ef7f9ed2899ac493a2b193ef9555529272f7e55ba388f30aff9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
