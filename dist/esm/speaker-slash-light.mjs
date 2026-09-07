export const name="speaker-slash-light";
export const id="dl_3dcc6fcef98f4d99b610";
export const url=new URL("../icons/S/speaker-slash-light.svg?v=3e326e53bf9a2bb165a108e86f80e05d762900f530b420475865d37b38375fab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
