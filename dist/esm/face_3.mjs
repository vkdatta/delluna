export const name="face_3";
export const id="dl_8e6aa96fe1712f85bbb0";
export const url=new URL("../icons/face_3.svg?v=1c67912d6ad88c66ec5dd234350991d7924d2e455a31aca10574ad4ed9d56946",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
