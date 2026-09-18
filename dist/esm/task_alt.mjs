export const name="task_alt";
export const id="dl_3dc53c0b1e84434da455";
export const url=new URL("../icons/task_alt.svg?v=d22be2a5b47527fb2678d7875f9cbc3ffae924223ba5657b6dd028f71ed6fa00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
