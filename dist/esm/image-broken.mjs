export const name="image-broken";
export const id="dl_0493671b4a9545e294ed";
export const url=new URL("../icons/image-broken.svg?v=ce2780c96e44798ad1474f79c60cb0482c2a4a98c99379e1eb051d376d1faeb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
