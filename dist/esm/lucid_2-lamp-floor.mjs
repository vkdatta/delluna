export const name="lucid_2-lamp-floor";
export const id="dl_eb7983fed44e40ddb2c4";
export const url=new URL("../icons/lucid_2-lamp-floor.svg?v=cb2afa4c4ce07fc5c99c6a035987c621074a5c7909b766e0cb248c7c412f4bec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
