export const name="spinner-ball-bold";
export const id="dl_e539a2838d3a44f8b1bd";
export const url=new URL("../icons/S/spinner-ball-bold.svg?v=5bd51b1b32cccff47612d350f7d57f65b3f995df0c57ed94f58602a71af1c7eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
