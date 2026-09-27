export const name="humidity_low";
export const id="dl_a0c89167fb13bf40dfc5";
export const url=new URL("../icons/humidity_low.svg?v=01402341e6cbe33412564819a05f7207e61d42a1b7ebbdc7321aa43bbbaf76ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
