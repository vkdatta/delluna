export const name="airplane-in-flight-light";
export const id="dl_7243710ae9764c53b90d";
export const url=new URL("../icons/airplane-in-flight-light.svg?v=9ad869192d42e5248ddb75695805e3a2f10ce7f20c1fd2f4d39121c1756a36d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
