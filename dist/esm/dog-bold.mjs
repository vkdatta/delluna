export const name="dog-bold";
export const id="dl_7ea2289a5a9b4c98b5bd";
export const url=new URL("../icons/dog-bold.svg?v=5a8985d27349192c72fa47ae8075d9806dfda7e51ad710807ae4c764f2a4eb06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
