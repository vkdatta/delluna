export const name="cross-thin";
export const id="dl_5b76f138fba14ad381d1";
export const url=new URL("../icons/cross-thin.svg?v=ef3fa3dafd8fbad563d310686fe481c5436d1c67d8a832430988246f79ee566f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
