export const name="lucid_1-bell-plus";
export const id="dl_7a211dca4cae4856837d";
export const url=new URL("../icons/lucid_1-bell-plus.svg?v=166a1d58b24b2899639bae33dde0a0e341d9e559be528835c3f0bee1757fc0ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
