export const name="fire_check";
export const id="dl_08f0efe439b74d98955e";
export const url=new URL("../icons/F/fire_check.svg?v=70c4c4fdec4670ea42b55ec0bddb5af74057ae1b08cc3fbae7524ea8431c3907",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
