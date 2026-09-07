export const name="treasure-chest";
export const id="dl_31898b52d1a3491e85c3";
export const url=new URL("../icons/T/treasure-chest.svg?v=5d9eb8250065f93429a93d8aa8d19a221072645262cacfc1d6c7b49822300eb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
