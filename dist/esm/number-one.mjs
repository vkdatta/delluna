export const name="number-one";
export const id="dl_9de53fcf4c1a4b6e8068";
export const url=new URL("../icons/number-one.svg?v=76c078366e778422590688f748b93cfe18c3f3136db6e6d62c51ff1142541aea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
