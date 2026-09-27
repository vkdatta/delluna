export const name="network-slash-light";
export const id="dl_84c316f0f1bd4d318ba9";
export const url=new URL("../icons/network-slash-light.svg?v=afb29efd6ebc81b0abe8bfe65725858b7bf88978bb85c49c71206d08b51090d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
