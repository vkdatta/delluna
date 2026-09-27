export const name="light_mode";
export const id="dl_faf50ca1bea786e06aae";
export const url=new URL("../icons/light_mode.svg?v=557e6bc58d6748c6208420ab8ff5329b25cb67e42e390a69962ca6250a581db5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
