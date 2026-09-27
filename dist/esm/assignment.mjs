export const name="assignment";
export const id="dl_3642420b93e0d0b1e123";
export const url=new URL("../icons/assignment.svg?v=7649e1c7e96925b3ec2dfde2ca9c7168157e3f1acd61dda431fa6c98e5af69b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
