export const name="train-simple-duotone";
export const id="dl_14e40d16262697fe3d97";
export const url=new URL("../icons/train-simple-duotone.svg?v=02a769707d650d9d289be3282c065d927c1ab6b3bd91ed85f6a4adf7607e3721",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
