export const name="castle-turret";
export const id="dl_e1837c5a4ce043b28f69";
export const url=new URL("../icons/castle-turret.svg?v=c8114c5f3cb714fe8b4d6320f47648580abd97d66c782b3b9284054eafb16d85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
