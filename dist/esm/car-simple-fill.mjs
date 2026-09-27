export const name="car-simple-fill";
export const id="dl_69db1bc7fc1640eabe26";
export const url=new URL("../icons/car-simple-fill.svg?v=de20a68a14aec39a33f04d77c9bb17fef104924261573963461f4bcc8ae1d5b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
