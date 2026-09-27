export const name="interpreter_mode";
export const id="dl_55405da53d75859f352a";
export const url=new URL("../icons/interpreter_mode.svg?v=c306b4ec13af4c4afe9c074f6b9f2b684fd3f30d6b9311aea611e7dd7e5346f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
