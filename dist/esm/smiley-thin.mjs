export const name="smiley-thin";
export const id="dl_a16313ffd5b54fe9817d";
export const url=new URL("../icons/S/smiley-thin.svg?v=4797fdcbc02298ea5547f520851e4e71d5edc62654f6924dae87fcd6fa29e458",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
