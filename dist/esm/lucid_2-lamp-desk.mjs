export const name="lucid_2-lamp-desk";
export const id="dl_e7437dda9aa64b809b1d";
export const url=new URL("../icons/lucid_2-lamp-desk.svg?v=b54a237a4c57fda42cdae9e21d9ede6d9ce2374cb179de0e80b2610ceb2ca1be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
