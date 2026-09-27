export const name="airlines";
export const id="dl_9a3f9b00132f2ed496e5";
export const url=new URL("../icons/airlines.svg?v=84a7d646c83e26ca03464ce208b7a2ac98838cae44bf6d9e158a3c1b76482ee4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
