export const name="split_scene_up";
export const id="dl_3616ec144ce43e3ca5c3";
export const url=new URL("../icons/split_scene_up.svg?v=8562bdfc339a7b37c66b92c70e6d40fa332179d8890e94c3a796b587b1be2208",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
