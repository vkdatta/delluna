export const name="person-simple-tai-chi-light";
export const id="dl_3a1343a127c44236a7a4";
export const url=new URL("../icons/person-simple-tai-chi-light.svg?v=3b0cccb85e451305a58d8a1991f06cca5acba41531660542ed70fe1e7cfaeb26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
