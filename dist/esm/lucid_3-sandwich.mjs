export const name="lucid_3-sandwich";
export const id="dl_be6a06c6657143648358";
export const url=new URL("../icons/lucid_3-sandwich.svg?v=cdb5ccbda56335d76321465f0be1959bb314bcd123eed15a071374f497012242",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
