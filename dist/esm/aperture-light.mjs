export const name="aperture-light";
export const id="dl_7ba7952fb27c4e998b18";
export const url=new URL("../icons/aperture-light.svg?v=ea39b64df638232b222d940181553f6f846058db0d20b41da5612e0036eaca75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
