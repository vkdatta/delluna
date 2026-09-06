export const name="robot-light";
export const id="dl_75e8ec536f384c3ca508";
export const url=new URL("../icons/robot-light.svg?v=2973239961fe2bba6d780c732cdaf326c1abdc5d42633c5dcfc098760c017117",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
