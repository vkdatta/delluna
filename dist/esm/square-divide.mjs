export const name="square-divide";
export const id="dl_4dbb1f0b2e99429799c7";
export const url=new URL("../icons/square-divide.svg?v=0c70ce40e23e9f1ad2085e9fb69a712541ccec1939e9ba660a300c3207aa3137",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
