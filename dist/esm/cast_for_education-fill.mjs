export const name="cast_for_education-fill";
export const id="dl_71cd4a6416bf47519537";
export const url=new URL("../icons/cast_for_education-fill.svg?v=193d8c71b636112df8cc3b75e0a9d5ef29e03d96a0ca366cb25233be00e77cbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
