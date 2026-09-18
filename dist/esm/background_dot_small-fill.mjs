export const name="background_dot_small-fill";
export const id="dl_6bfda69fcb434a4caa54";
export const url=new URL("../icons/background_dot_small-fill.svg?v=4be454dbec91bee7cfb0401643566d89d55ac737456d4a4887f48e94e53c3bed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
