export const name="microsoft-outlook-logo-bold";
export const id="dl_57eb7a70bb9447548d21";
export const url=new URL("../icons/microsoft-outlook-logo-bold.svg?v=46bd95b504c764797f559cfb28ec33aded2093ef80cdfac5867fa87900a5c722",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
