export const name="oncology";
export const id="dl_4f60fedd270963c6e7e4";
export const url=new URL("../icons/oncology.svg?v=4b42c7add533a70db1ef3c99e2a4e487f5f491329f0ab49b8cb5b3aadebd6add",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
