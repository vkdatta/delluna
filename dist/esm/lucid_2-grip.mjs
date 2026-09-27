export const name="lucid_2-grip";
export const id="dl_21cc8c3de46343a9853c";
export const url=new URL("../icons/lucid_2-grip.svg?v=d998f2c9e0030db77e5248643026468b4e8297e065e786d23c4f446369305e34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
