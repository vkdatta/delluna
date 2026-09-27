export const name="y_circle-fill";
export const id="dl_5bf6af7fe5e3e8564e5c";
export const url=new URL("../icons/y_circle-fill.svg?v=f60f34bbd64155b4bf7f510c0e1dd96e8691e14fdfe0125744084761687a98a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
