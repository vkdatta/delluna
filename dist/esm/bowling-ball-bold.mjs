export const name="bowling-ball-bold";
export const id="dl_6f330d0708e64569ae63";
export const url=new URL("../icons/bowling-ball-bold.svg?v=d7edbf8631621400d08a5148b640c235e50ddc14bfc64cf589288f1c13e8bfa5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
