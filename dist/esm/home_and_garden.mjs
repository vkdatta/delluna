export const name="home_and_garden";
export const id="dl_943c7ac80f0d48e29a8e";
export const url=new URL("../icons/H/home_and_garden.svg?v=63982ce260fa8c99e1228a9ca7d7a4dcfdf9f642b9b1d4b4d92efcaac659c4d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
