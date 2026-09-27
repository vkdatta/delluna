export const name="bomb-light";
export const id="dl_b33036c2a30545e3a31a";
export const url=new URL("../icons/bomb-light.svg?v=3f60020278e724433d1afcb969064ce0cc314d3cae1d41c9ba277874787f553c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
