export const name="add_box";
export const id="dl_64935bc34623d5489837";
export const url=new URL("../icons/add_box.svg?v=e7cdbe3c2fe41b265acfe7efb3380010795f91e8e50a264badc403d4afbe9e68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
