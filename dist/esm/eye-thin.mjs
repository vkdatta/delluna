export const name="eye-thin";
export const id="dl_8e06c018985a4e29a34d";
export const url=new URL("../icons/eye-thin.svg?v=868651074f8f22c7e90d4a29390a4bd5624f6e3686d6d5ed5f8ab20ed8c992d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
