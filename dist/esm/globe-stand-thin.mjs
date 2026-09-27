export const name="globe-stand-thin";
export const id="dl_0a329e858cd74cb69abb";
export const url=new URL("../icons/globe-stand-thin.svg?v=e94c87314de54f6b21ccad09fb535e42fd14c456807beb3172f9a558793ed02b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
