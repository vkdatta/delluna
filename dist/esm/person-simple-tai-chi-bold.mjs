export const name="person-simple-tai-chi-bold";
export const id="dl_c1db6ff9486a418183de";
export const url=new URL("../icons/person-simple-tai-chi-bold.svg?v=e1c9409a3e54085467d808a3ffc99d45d5ab854af2bd77572a507ded117cc3f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
