export const name="person-light";
export const id="dl_e43ae329789545b39a43";
export const url=new URL("../icons/person-light.svg?v=abcb56f70c2c631ce57c42d8073cb26ef29b6569a9e4172891d09f8eee7376dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
