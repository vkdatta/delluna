export const name="function-light";
export const id="dl_6900afb537fb42b0a6b4";
export const url=new URL("../icons/function-light.svg?v=60065b800c0118c8f4814763eb7acf163d741d858f8ed6036c07ef9d01593ad8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
