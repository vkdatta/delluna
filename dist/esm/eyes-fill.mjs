export const name="eyes-fill";
export const id="dl_a98bfdca2d344ccdb80b";
export const url=new URL("../icons/eyes-fill.svg?v=442cf5806efa173723dd0498657c6110f696a2d26f46fc9fcfc46238e8cf5ae0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
