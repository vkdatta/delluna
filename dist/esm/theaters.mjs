export const name="theaters";
export const id="dl_46184b321ad698be3878";
export const url=new URL("../icons/theaters.svg?v=fd50e0397ef707c4d09bf11371f0d231ba1d1be71c3c209f1f4acd0c471b8103",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
