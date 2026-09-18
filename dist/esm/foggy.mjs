export const name="foggy";
export const id="dl_7bc2bf6f78574870b648";
export const url=new URL("../icons/foggy.svg?v=ccb733d20285323ede16febdf407136e1bdc3e21ea2b393ae1c74c38c6d13710",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
