export const name="person-simple-ski-fill";
export const id="dl_4b5fbb2bf5754e1aa405";
export const url=new URL("../icons/person-simple-ski-fill.svg?v=889e9a7286f895bf004b95b4dd4f41e1a4e27dadc43a4f1c06d800dedc56a04f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
