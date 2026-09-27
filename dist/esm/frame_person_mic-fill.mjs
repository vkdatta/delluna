export const name="frame_person_mic-fill";
export const id="dl_300b5cb76106cb8fe147";
export const url=new URL("../icons/frame_person_mic-fill.svg?v=867582cd4e8251ec7028d075e7874be8cdab20b08194ff137226e2478fb5be3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
