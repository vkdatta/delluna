export const name="envelope-simple-open-light";
export const id="dl_b627f30f801f4a4a8849";
export const url=new URL("../icons/envelope-simple-open-light.svg?v=620e6b0eeb02aa86de9a8bd6ee7e2dd0fc54c4c470dbaf342c36ec0b7f68495c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
